"""
URL configuration for newslttr project.

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/4.2/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path
from django.urls import path

from .views import upload_newsletter, get_recipients, add_recipient, send_newsletter


urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/upload-newsletter', upload_newsletter),
    path('api/recipients', get_recipients),
    path('api/recipients/add', add_recipient),
    path('api/send-newsletter', send_newsletter),
]
