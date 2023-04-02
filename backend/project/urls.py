from django.contrib import admin
from django.conf.urls.static import static
from django.urls import path, include
from drf_yasg import openapi
from drf_yasg.views import get_schema_view
from rest_framework import permissions
from rest_framework_simplejwt.views import TokenObtainPairView, TokenRefreshView, TokenVerifyView

from project import settings
from registration.views import RegistrationView, RegistrationValidationView

schema_view = get_schema_view(
    openapi.Info(
        title="Luna API",
        default_version='v1',
        description="Luna API from Team 4. Exercise for Constructor Academy",
        terms_of_service="https://www.google.com/policies/terms/",
        contact=openapi.Contact(email="learn@propulsionacademy.com"),
        license=openapi.License(name="BSD License"),
    ),
    public=True,  # Set to False restrict access to protected endpoints
    permission_classes=(permissions.AllowAny,),  # Permissions for docs access
)

urlpatterns = [
    path('backend/api/admin/', admin.site.urls),

    path('backend/api/users/', include('user.urls')),

    path('backend/api/auth/token/', TokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('backend/api/auth/token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
    path('backend/api/auth/token/verify/', TokenVerifyView.as_view(), name='token_verify'),

    path('backend/api/auth/registration/', RegistrationView.as_view(), name='registration'),
    path('backend/api/auth/registration/validation/', RegistrationValidationView.as_view(), name='validation'),

    path('backend/api/docs/', schema_view.with_ui('swagger', cache_timeout=0), name='schema-swagger-ui'),
    path('backend/api/docs/redoc/', schema_view.with_ui('redoc', cache_timeout=0), name='schema-redoc'),
]

# Add media files serving in debug mode
if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
