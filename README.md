# Cryptoasis MVP - Next.js & Tailwind CSS

This is a cryptocurrency dashboard application built with Next.js and Tailwind CSS, based on the Cryptoasis MVP design from Figma.

## Features

- Responsive cryptocurrency dashboard
- Real-time market data visualization
- Portfolio tracking and analytics
- Latest news section
- Favorites system
- Clean and modern UI based on Figma design

## Getting Started

Follow these instructions to get a copy of the project up and running on your local machine.

### Prerequisites

- Node.js 18+ and npm/yarn

### Installation

1. Clone the repository
```bash
git clone https://github.com/your-username/cryptoasis-mvp.git
cd cryptoasis-mvp
```

2. Install dependencies
```bash
npm install
# or
yarn install
```

3. Start the development server
```bash
npm run dev
# or
yarn dev
```

4. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Project Structure

```
cryptoasis-mvp/
├── app/                    # Next.js app directory
│   ├── analytics/          # Analytics page
│   ├── discover/           # Discover page
│   ├── settings/           # Settings page
│   ├── globals.css         # Global styles
│   ├── layout.js           # Root layout
│   └── page.js             # Homepage
├── components/             # Reusable components
│   ├── CryptoCard.jsx      # Cryptocurrency card
│   ├── Header.jsx          # Application header
│   ├── MarketOverview.jsx  # Market overview chart
│   ├── MarketTable.jsx     # Market data table
│   ├── NewsCard.jsx        # News items
│   ├── PortfolioSummary.jsx# Portfolio summary
│   └── Sidebar.jsx         # Sidebar navigation
├── public/                 # Static assets
│   └── assets/             # Images and icons
├── utils/                  # Utility functions
│   └── data.js             # Mock data
├── .gitignore
├── next.config.js          # Next.js configuration
├── package.json
├── postcss.config.js       # PostCSS configuration
└── tailwind.config.js      # Tailwind CSS configuration
```

## Dependencies

- Next.js - React framework
- Tailwind CSS - Utility-first CSS framework
- React Icons - Icon library
- Chart.js & react-chartjs-2 - Chart library
- Headless UI - Unstyled UI components

## Deployment

The application can be built for production using:

```bash
npm run build
# or
yarn build
```

You can then start the production server:

```bash
npm start
# or
yarn start
```

## Additional Notes

- Replace placeholder images in `/public/assets/` with actual images before production
- Connect to a real cryptocurrency API for production data

## License

This project is licensed under the MIT License.

## Acknowledgments

- Figma design template: [Cryptoasis MVP v1](https://www.figma.com/design/wGwH63IUjFUwb1yNwkJcz3/Cryptoasis-MVP-v1)
- GitHub repository: [sol-decoder2025/decoder-alpha](https://github.com/sol-decoder2025/decoder-alpha)