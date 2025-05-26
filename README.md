# HealthCare

Displays a series of health status cards with titles, dates, statuses, and an optional image.

## Features

*   Shows multiple health cards from data.
*   Each card displays title, date, status (dot + text), and a "more options" icon.
*   **Images**:
    *   1st card: `lungs.png`
    *   2nd card: `bone.png`
    *   3rd card: `Theeth.jpg` (or `Teeth.jpg`)
*   Styled with `HealthStatusCards.css`.

## Setup

1.  **Files**:
    *   `src/components/HealthStatusCards.js`
    *   `src/components/HealthStatusCards.css` (Create or use existing)
    *   Images (`lungs.png`, `bone.png`, `Theeth.jpg`) in `src/assets/images/` (adjust paths in JS if different).
2.  **Install Dependencies**:
    ```bash
    npm install lucide-react
    # or
    yarn add lucide-react
    ```

## Usage

1.  **Import**:
    ```javascript
    import HealthStatusCards from './components/HealthStatusCards';
    ```
2.  **Data**: Pass a `cards` prop (array of objects):
    ```javascript
    const healthData = [
      { id: 1, title: 'Lungs', date: '2023-10-26', statusColor: 'green', statusText: 'Normal' },
      { id: 2, title: 'Bones', date: '2023-10-20', statusColor: 'orange', statusText: 'Checkup Due' },
      // ... more cards
    ];
    ```
3.  **Render**:
    ```jsx
    <HealthStatusCards cards={healthData} />
    ```

## Props

*   `cards` (Array, **Required**): Array of card objects. Each object needs `id`, `title`, `date`, `statusColor`, `statusText`.

## Styling

Customize appearance in `HealthStatusCards.css`. Key classes:
*   `.health-status-cards-container`
*   `.health-status-card`
*   `.card-header`, `.health-card-title`, `.card-image`, `.more-icon`
*   `.health-card-date`, `.health-card-status`, `.status-dot`

## Notes
*   Verify image paths in `HealthStatusCards.js`.
*   Consider renaming `Theeth.jpg` to `Teeth.jpg` if it's a typo.
*   For more dynamic images, modify the component to accept an `imageSrc` in each card data object.
