# DocsAI Chatbot Template

This is a simple template for deploying DocsAI chatbots. It provides a basic chatbot interface that can be customized for each chatbot instance.

## Environment Variables

This template uses the following environment variables:

- `NEXT_PUBLIC_CHATBOT_NAME`: The name of your chatbot
- `NEXT_PUBLIC_CHATBOT_ID`: The unique ID of your chatbot

These variables are set during deployment by the DocsAI platform.

## Development

To run this project locally:

```bash
npm install
npm run dev
```

## Customization

You can customize the appearance and behavior of your chatbot by editing the relevant files:

- `src/app/page.tsx`: The main chatbot interface
- `src/app/globals.css` and `tailwind.config.js`: Styling

## Deployment

This template is meant to be deployed automatically by the DocsAI platform. You don't need to deploy it manually.
