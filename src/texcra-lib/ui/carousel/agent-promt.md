Create a mobile **Values Carousel** with a horizontal card track and pagination indicators below.

## Parameters

- `cardWidth`: 300px
- `cardGap`: 16px
- `trackPadding`: 24px
- `cardPadding`: 40px
- `cardRadius`: 8px
- `cardBackground`: `$primary`
- `cardBorder`: `#0069A84D`
- `activeOpacity`: 100%
- `inactiveOpacity`: 50%
- `titleColor`: `$accent`
- `textColor`: `$primary-foreground`
- `inactiveIndicatorColor`: `$muted-foreground`
- `activeIndicatorColor`: `$primary`

## Carousel Track

- Horizontal layout.
- Fill container width.
- Clip overflow.
- Display cards in the provided order.
- The active card uses `activeOpacity`; remaining cards use `inactiveOpacity`.

## Pagination Indicators

Place centered below the track with an 8px gap.

- Active: 24×8, radius 4.
- Inactive: 8×8, radius 4.
- Indicator order must match card order.

Use clear, human-readable layer names.

This represents a **static carousel state** only. Do not add interaction or unsupported behavior.
