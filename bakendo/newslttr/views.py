from django.core.mail import EmailMessage
from django.http import JsonResponse
from django.shortcuts import get_object_or_404
from django.views.decorators.csrf import csrf_exempt
from rest_framework.decorators import api_view

from .models import Newsletter, Recipient

@api_view(['POST'])
@csrf_exempt
def upload_newsletter(request):
    file = request.FILES.get('file')
    newsletter = Newsletter.objects.create(file=file)
    return JsonResponse({'message': 'Newsletter uploaded successfully.'})

@api_view(['GET'])
def get_recipients(request):
    recipients = Recipient.objects.all()
    return JsonResponse({'recipients': [{'id': r.id, 'email': r.email} for r in recipients]})

@api_view(['POST'])
@csrf_exempt
def add_recipient(request):
    email = request.data.get('email')
    recipient, created = Recipient.objects.get_or_create(email=email)
    return JsonResponse({'message': 'Recipient added successfully.'})

@api_view(['POST'])
@csrf_exempt
def send_newsletter(request):
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
    
    return JsonResponse({'message': 'Newsletter sent successfully.'})
