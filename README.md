# Meeting Poll Design Update

Meeting Poll is a preset for the Moodle activity database.

Fork of [fdagner/meetingpoll_moodle-database-preset](https://github.com/fdagner/meetingpoll_moodle-database-preset).

The functional logic—responses as JSON in a hidden text field, date list
from a hidden drop-down menu—was developed by Florian Dagner. This fork
updates the design and fixes a Bootstrap problem in Moodle 4.5/Bootstrap 4.

## Description

Organizers propose time slots; participants answer Yes / Maybe / No.

The list view shows a clear matrix of all responses and highlights the best-fitting appointments.
Supports all-day events, optional notes, and automatic validation of the time slot list.

## Features

- **Time slot management** via a menu field (ISO dates: `YYYY-MM-DD` or `YYYY-MM-DDTHH:MM`)
- **Three-way answers**: Yes (✓), Maybe (?), No (✗)
- **Automatic overview table** with all participants and slots
- **Best appointment highlighting** (highest number of “Yes” answers)
- **Grouping by day** with shared day labels
- **All-day events** supported (`YYYY-MM-DD` without time)
- **Optional note** per entry
- **Edit support** – existing answers are restored when editing an entry
- Validation & warnings for invalid or duplicate slots


## Getting started

Create a "Database" activity in Moodle and then upload the ZIP file.
Edit the **events** field and enter one time slot per line, e.g.:
- 2026-06-15T10:00-11:30
- 2026-06-14T14:00
- 2026-06-14T16:00
- 2026-06-15T12:00
- 2026-06-16
- With time: `YYYY-MM-DDTHH:MM`
- All-day: `YYYY-MM-DD`

## Language Support

The preset is available in German, but there is not so much to translate. The template can easily be adapted. 

## Screenshots

<img style="width: 75%" alt="list view" src="/screenshots/listenansicht.png">
<img style="width: 75%" alt="list view" src="/screenshots/einzelansicht.png">
