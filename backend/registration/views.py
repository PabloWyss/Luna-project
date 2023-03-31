from django.core.mail import send_mail
from django.shortcuts import get_object_or_404
from django.utils.crypto import get_random_string
from rest_framework import status
from rest_framework.response import Response
from rest_framework.views import APIView

from project import settings
from registration.serializers import RegistrationSerializer


class RegistrationView(APIView):
    serializer_class = RegistrationSerializer
    authentication_classes = (AllowAny)

    def post(self, request):
        serializer = self.serializer_class(data=request.data)
        serializer.is_valid(raise_exception=True)

        email = serializer.validated_data.get('email')

        if not email:
            return Response({'error': 'Email is required'}, status=status.HTTP_400_BAD_REQUEST)

        if User.Objects.filter(email=email).exists():
            return Response({'error': 'User with this email already exists'}, status=status.HTTP_400_BAD_REQUEST)

        # validation_code = get_random_string(length=6)
        # message = f'Your validation code is {validation_code}'
        # send_mail(
        #     'Luna Validation Code',
        #     message,
        #     [email],
        #     fail_silently=False,
        #     auth_user=settings.EMAIL_HOST_USER,
        #     auth_password=settings.EMAIL_HOST_PASSWORD,
        # )

        # return Response({'success': 'Validation code was sent to your email'}, status=status.HTTP_200_OK)


class RegistrationValidationView(APIView):
    serializer_class = RegistrationSerializer

    def post(self, request):
        serializer = self.serializer_class(data=request.data)
        serializer.is_valid(raise_exception=True)

        email = serializer.validated_data.get('email')
        validation_code = serializer.validated_data.get('validation_code')

        if not email:
            return Response({'error': 'Email is required'}, status=status.HTTP_400_BAD_REQUEST)

        if not validation_code:
            return Response({'error': 'Validation code is required'}, status=status.HTTP_400_BAD_REQUEST)

        user = get_object_or_404(User, email=email)

        if not user.registration.is_validation_code_valid(validation_code):
            return Response({'error': 'Validation code is not valid'}, status=status.HTTP_400_BAD_REQUEST)

        if not all[username, password, password_repeat, first_name, last_name]:
            return Response({'error': 'All fields are required'}, status=status.HTTP_400_BAD_REQUEST)

        if password != password_repeat:
            return Response({'error': 'Passwords do not match'}, status=status.HTTP_400_BAD_REQUEST)

        user.username = username
        user.set_password(password)
        user.first_name = first_name
        user.last_name = last_name
        user.is_active = True
        user.save()

        return Response({'success': 'User was created'}, status=status.HTTP_200_OK)

