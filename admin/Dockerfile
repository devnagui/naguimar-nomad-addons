FROM ghcr.io/devnagui/project-nomad:1.35.2-haos.1

COPY overlay/ /app/
COPY run.py /ha-addon-run.py

ENTRYPOINT ["python3", "/ha-addon-run.py"]
