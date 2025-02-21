# Use a Python base image
FROM python:3.12

# Set the working directory inside the container
WORKDIR /app

# Copy the requirements file (if you have one) first to leverage Docker's caching
COPY requirements.txt /app/

# Install dependencies
RUN if [ -f requirements.txt ]; then pip install --no-cache-dir -r requirements.txt; fi

# Copy the rest of the application code
COPY . /app/

# Expose the port that Uvicorn will listen on
EXPOSE 8000

# Start the Uvicorn server
CMD ["uvicorn", "main:app", "--host", "0.0.0.0", "--port", "8000"]