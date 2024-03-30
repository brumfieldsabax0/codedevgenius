// simple_calendar_app.js

class Event {
    constructor(date, title) {
        this.date = date;
        this.title = title;
    }
}

class Calendar {
    constructor() {
        this.events = [];
    }

    addEvent(event) {
        this.events.push(event);
    }

    viewEvents(date) {
        const eventsOnDate = this.events.filter(event => event.date === date);
        eventsOnDate.forEach(event => console.log(`${event.date}: ${event.title}`));
    }
}

// Example usage
const calendar = new Calendar();
calendar.addEvent(new Event('2024-04-01', 'Meeting with Client'));
calendar.addEvent(new Event('2024-04-15', 'Project Deadline'));
calendar.viewEvents('2024-04-15');
