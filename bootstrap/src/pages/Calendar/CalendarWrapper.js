import React, { useEffect, useState, useRef } from "react";
import { Row, Col, Card } from 'react-bootstrap';

import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin, { Draggable } from "@fullcalendar/interaction";


import ViewCodePopup from "../Components/ViewCodePopup/ViewCodePopup";
import ViewCodeButton from "../Components/ViewCodeButton/ViewCodeButton";
// import { FloorPlanAdminData } from '../ViewCodeData/ViewCodeData';
import events from './Components/events';

const CalendarWrapper = () => {
    const [state, setState] = useState({
        weekendsVisible: true,
        externalEvents: [
            { title: "Art 1", color: "#0097a7", id: 34432, custom: "fdsfdsfds" },
            { title: "Art 2", color: "#f44336", id: 323232 },
            { title: "Art 3", color: "#f57f17", id: 1111 },
            { title: "Art 4", color: "#90a4ae", id: 432432 }
        ],
        calendarEvents: [
            {
                id: 1,
                title: "All-day event",
                color: "#388e3c",
                start: "2020-12-12",
                end: "2020-12-12",
                custom: "questo è un campo custom"
            },
            {
                id: 2,
                title: "Timed event",
                color: "#0097a7",
                start: "2020-12-07",
                end: "2020-12-10",
                custom: "custom stuff"
            }
        ]
    });

    // load external events
    useEffect(() => {
        let draggableEl = document.getElementById("external-events");
        new Draggable(draggableEl, {
            itemSelector: ".fc-event",
            eventData: function (eventEl) {
                let id = eventEl.dataset.id;
                let title = eventEl.getAttribute("title");
                let color = eventEl.dataset.color;
                let custom = eventEl.dataset.custom;

                return {
                    id: id,
                    title: title,
                    color: color,
                    custom: custom,
                    create: true
                };
            }
        });
    });

    // add external events
    const addEvent = () => {
        let newEvent = {
            id: 3433,
            title: "Timed event",
            color: "#333333",
            start: "2020-12-31",
            end: "2020-12-31",
            custom: "custom stuff"
        };

        setState((state) => {
            return {
                ...state,
                externalEvents: state.externalEvents.concat(newEvent)
            };
        });
    };

    // handle event receive
    const handleEventReceive = (eventInfo) => {
        const newEvent = {
            id: eventInfo.draggedEl.getAttribute("data-id"),
            title: eventInfo.draggedEl.getAttribute("title"),
            color: eventInfo.draggedEl.getAttribute("data-color"),
            start: eventInfo.date,
            end: eventInfo.date,
            custom: eventInfo.draggedEl.getAttribute("data-custom")
        };

        setState((state) => {
            return {
                ...state,
                calendarEvents: state.calendarEvents.concat(newEvent)
            };
        });
    };



    const [show, setShow] = useState(false);
    return (
        <>
            <Row className="mb-4">
                <Col><h4 className="fw-boldest text-black mb-0">Full Calendar</h4></Col>
                <Col className="text-end">
                    <ViewCodeButton show={show} setShow={setShow} />
                </Col>
            </Row>
            <Row>
                <Col sm={4} md={3}>
                    <Card>
                        <Card.Body>
                            <div id="external-events">
                                {state.externalEvents.map((event) => (
                                    <div
                                        className="fc-event fc-h-event mb-1 fc-daygrid-event fc-daygrid-block-event p-2"
                                        title={event.title}
                                        data-id={event.id}
                                        data-color={event.color}
                                        data-custom={event.custom}
                                        key={event.id}
                                        style={{
                                            backgroundColor: event.color,
                                            borderColor: event.color,
                                            cursor: "pointer"
                                        }}
                                    >
                                        <div className="fc-event-main">
                                            <div>
                                                <strong>{event.title}</strong>
                                            </div>
                                            {event.custom}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col sm={8} md={9}>
                    <Card>
                        <Card.Body>
                            <FullCalendar
                                plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
                                headerToolbar={{
                                    left: "prev,next today",
                                    center: "title",
                                    right: "dayGridMonth,timeGridWeek,timeGridDay"
                                }}
                                initialView="dayGridMonth"
                                editable={true}
                                selectable={true}
                                selectMirror={true}
                                dayMaxEvents={true}
                                weekends={state.weekendsVisible}
                                events={events}
                                droppable={true}
                                calendarEvents={state.calendarEvents}
                                eventReceive={handleEventReceive}
                            />
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            {/* <ViewCodePopup show={show} setShow={setShow} NavData={FloorPlanAdminData} /> */}
        </>
    );
}
export { CalendarWrapper }