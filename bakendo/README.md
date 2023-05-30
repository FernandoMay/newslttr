# Getting Started with Newsletter bakendo

This project serves as a backend for a web application built using Django.

## Installation

1. Create a virtual environment:
   ```
   python3 -m venv env
   ```

2. Activate the virtual environment:
   - For Mac/Linux:
     ```
     source env/bin/activate
     ```
   - For Windows:
     ```
     .\env\Scripts\activate
     ```

3. Install the project dependencies:
   ```
   pip install -r requirements.txt
   ```

4. Apply the database migrations:
   ```
   python manage.py migrate
   ```

5. Start the development server:
   ```
   python manage.py runserver
   ```

6. Open [http://localhost:8000](http://localhost:8000) in your browser to view the Django backend.

## Available Endpoints

- `/api/upload-newsletter` - POST request to upload a newsletter.
- `/api/recipients` - GET request to retrieve a list of recipients.
- `/api/recipients/add` - POST request to add a new recipient.
- `/api/send-newsletter` - POST request to send a newsletter to recipients.

## Testing

To run the tests for the backend, use the following command:
```
python manage.py test
```

## Deployment

Refer to the Django documentation for information on deploying a Django project in a production environment.

## Learn More

You can learn more about Django in the [Django documentation](https://docs.djangoproject.com/).

## Troubleshooting

If you encounter any issues, refer to the [Django troubleshooting guide](https://docs.djangoproject.com/en/3.2/topics/).