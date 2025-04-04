This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Spacing Standards

To maintain consistent spacing throughout the application, please adhere to the following guidelines:

### Section Spacing

All page sections should use the `SectionContainer` component which provides standardized padding:

```jsx
<SectionContainer id="section-id" bgColor="bg-gray-50">
  {/* Section content */}
</SectionContainer>
```

The standard section padding is:
- Mobile: `py-16` (4rem top and bottom)
- Tablet: `md:py-20` (5rem top and bottom)
- Desktop: `lg:py-24` (6rem top and bottom)

### Button Container Spacing

When adding call-to-action buttons, use the `ButtonContainer` component:

```jsx
<ButtonContainer>
  <CustomButton
    text="Button Text"
    href="/path"
    iconSize={20}
    size="lg"
    variant="primary"
  />
</ButtonContainer>
```

The standard button container spacing is:
- `mt-8` margin top (2rem) from the TextBlock above
- `mb-12` margin bottom (3rem) to the next component
- Centered with `flex justify-center`
- Responsive behavior: stacks buttons on mobile, horizontal on larger screens

### Text Block Configuration

Consistently use the following TextBlock properties:

```jsx
<TextBlock
  headline="Headline"
  introduction="Introduction text"
  headlineSize="lg"
  textSize="lg"
  verticalSpacing="lg"
  horizontalSpacing="md"
/>
```

The TextBlock component provides these standard spacings:
- `verticalSpacing="lg"` - Adds 2.5rem (40px) space between text elements and adds a 2.5rem margin-bottom
- `headlineSize="lg"` - Uses large, responsive text sizes for headlines
- `horizontalSpacing="md"` - Adds appropriate horizontal padding on larger screens

### Grid Layout Configuration

For consistent card and grid layouts, use the GridLayout component:

```jsx
<GridLayout columns={3} gap="md">
  {/* Card items */}
</GridLayout>
```

The GridLayout component provides consistent responsive behavior:
- `columns={3}` - Defines the maximum number of columns on large screens
- `gap="md"` - Uses a consistent 1.5rem (24px) gap between items
- Automatically adapts to fewer columns on smaller screens

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
