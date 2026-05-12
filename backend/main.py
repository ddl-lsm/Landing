import os
import resend
from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from typing import Literal, Optional

resend.api_key = os.environ["RESEND_API_KEY"]

NOTIFY_TO   = "ddl.lsm@gmail.com"
NOTIFY_FROM = "onboarding@resend.dev"

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["https://ddl-lsm.github.io"],
    allow_methods=["POST", "OPTIONS"],
    allow_headers=["Content-Type"],
)


class ContactForm(BaseModel):
    method:   Literal["message", "callback", "contact"]
    name:     str
    contact:  str
    platform: Optional[str] = None
    message:  Optional[str] = None


METHOD_LABELS = {
    "message":  "Message",
    "callback": "Callback request",
    "contact":  "Left contact",
}


@app.post("/api/contact")
async def handle_contact(form: ContactForm):
    label = METHOD_LABELS[form.method]

    # Notification to owner
    body_parts = [
        f"<p><b>Type:</b> {label}</p>",
        f"<p><b>Name:</b> {form.name}</p>",
        f"<p><b>Contact:</b> {form.contact}</p>",
    ]
    if form.platform:
        body_parts.append(f"<p><b>Platform:</b> {form.platform}</p>")
    if form.message:
        body_parts.append(f"<p><b>Message:</b><br>{form.message}</p>")

    try:
        resend.Emails.send({
            "from":    NOTIFY_FROM,
            "to":      NOTIFY_TO,
            "subject": f"[SmartBuildTech] New inquiry — {label} from {form.name}",
            "html":    "".join(body_parts),
        })
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

    # Confirmation to user (only if contact looks like an email)
    if "@" in form.contact:
        confirmation_map = {
            "message":  "We received your message and will reply within one business day.",
            "callback": f"We'll reach out to you via <b>{form.platform}</b> within one business day.",
            "contact":  "We have your contact and will get in touch shortly.",
        }
        resend.Emails.send({
            "from":    NOTIFY_FROM,
            "to":      form.contact,
            "subject": "SmartBuildTech — we got your message",
            "html": f"""
                <p>Hi {form.name},</p>
                <p>{confirmation_map[form.method]}</p>
                <p>— SmartBuildTech team</p>
            """,
        })

    return {"ok": True}


@app.get("/api/health")
async def health():
    return {"status": "ok"}
