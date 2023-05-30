from celery import shared_task
from django.core.mail import EmailMessage
from .models import Newsletter, Recipient

@shared_task
def send_newsletter_async():
    newsletter = Newsletter.objects.first()
    recipients = Recipient.objects.filter(is_subscribed=True)
    
    for recipient in recipients:
        email = EmailMessage(
            subject='Newsletter',
            body='Please find attached the latest newsletter.',
            to=[recipient.email],
        )
        email.attach_file(newsletter.file.path)
        email.send()
