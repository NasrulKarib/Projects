from rest_framework.routers import DefaultRouter
from django.contrib import admin
from django.urls import path,include
from todo import views

router = DefaultRouter()
router.register(r'tasks',views.TaskView)

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/',include(router.urls))
]
