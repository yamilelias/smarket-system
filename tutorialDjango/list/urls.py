from django.conf.urls import include, url
from django.contrib import admin

urlpatterns = [
    url(r'^list/', include('list.urls')),
    url(r'^admin/', admin.site.urls),
]