# Use a Python base image
FROM python:3.13

# Set the working directory inside the container
WORKDIR /app

# Copy the poetry lock file and pyproject.toml
COPY pyproject.toml poetry.lock /app/

# Install pip
RUN python -m ensurepip --upgrade
# Install Poetry
RUN pip install poetry

# Install dependencies using Poetry
RUN poetry install --no-root

# Ensure Poetry's virtual environment is in the PATH
ENV PATH="/root/.local/share/pypoetry/venv/bin:$PATH"

# Copy the rest of the application code
COPY . /app/

# Expose the port that Uvicorn will listen on
EXPOSE 8000

# Start the Uvicorn server
CMD ["poetry", "run", "uvicorn", "main:app", "--host", "0.0.0.0", "--port", "8000"]
