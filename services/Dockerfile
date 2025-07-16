FROM golang:1.23-alpine AS builder

WORKDIR /app

COPY go.mod go.sum ./
RUN go mod download

COPY . .
RUN go build -tags lambda.norpc -o main /app/cdk/main.go

FROM public.ecr.aws/lambda/provided:al2023

WORKDIR /app

COPY --from=builder /app/main /app/main
ENTRYPOINT [ "/app/main" ]