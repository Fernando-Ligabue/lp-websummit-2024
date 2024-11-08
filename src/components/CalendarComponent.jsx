/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";
import dayjs from "dayjs";
import { motion } from "framer-motion";
import { XIcon } from "lucide-react";

function getOrdinal(day) {
  const j = day % 10;
  const k = day % 100;
  if (j === 1 && k !== 11) return "st";
  if (j === 2 && k !== 12) return "nd";
  if (j === 3 && k !== 13) return "rd";
  return "th";
}

const categoryColors = {
  porto: "bg-porto-10 border-porto-500 text-porto-500",
  tera: "bg-tera-10 border-tera-500 text-tera-500",
  investPorto: "bg-investPorto-10 border-investPorto-500 text-investPorto-500",
  leme: "bg-leme-10 border-leme-500 text-leme-500",
  visit: "bg-visit-10 border-visit-500 text-visit-500",
  scaleup: "bg-scaleup-10 border-scaleup-500 text-scaleup-500",
};

const categoryDotColors = {
  porto: "bg-porto-500",
  tera: "bg-tera-500",
  investPorto: "bg-investPorto-500",
  leme: "bg-leme-500",
  visit: "bg-visit-500",
  scaleup: "bg-scaleup-500",
};

const eventsData = [
  {
    id: 1,
    title: "Talk: A Taste of Culinary Action",
    details:
      "<p>An approach to gastronomy from an innovation and technology perspective,</strong> in collaboration with the Basque Culinary Center, with the aim of promoting entrepreneurship and generating new businesses in the agro-food sector.<br /><br /> Experts from the Basque Culinary Center and Chef Vasco Coelho Santos host an exciting conversation about the state of the art in Porto and the Basque Country. </p> <ul> <li>5' Opening:</strong> City Councillor for Tourism and Internationalisation, Catarina Santos Cunha</li><br /> <li>10' Gastronomy open ecosystem: Developing Innovation Ecosystems: Ander López (BCC - Entrepreneurship Manager)</li><br /> <li>40' Talking about Gastro-tech: An overview of the landscape in Porto (Catarina Santos Cunha, Vasco Coelho Santos, Ander Lopez, Moderator: Luís Alves, Revista de Vinhos)</li><br /> <li>15' Startup pitches: (3)</li><br /> <li>10' Keynote - Gastronomy meets Science: Erich Eichstetter (BCC - Tech Scout / LABe Digital Gastronomy Lab)</li> </ul> ",
    start: "2024-11-12T10:00",
    end: "2024-11-12T12:00",
    legend: "Visit Porto.",
    category: "visit",
  },
  {
    id: 2,
    title:
      "Toast to Porto | Great Wine Capitals -Fladgate, Symington and Sogrape",
    details:
      "Fine Wines, long-standing bonds, that’s Porto. Join us for a Toast with Porto Wine at our Stand! <br /><br /> Winemakers gather and cross-reference knowledge. Conductors who compose symphonies based on thousands of possible notes.",
    start: "2024-11-12T12:00",
    end: "2024-11-12T12:30",
    legend: "Porto.",
    category: "porto",
  },
  {
    id: 3,
    title: "Live Podcast: Founder Tales ",
    details:
      "<p>‘Founder Tales’ is a podcast that takes its listeners behind the scenes of Portuguese startups and reveals the most unique stories of their founders.<br /><br />  In this special episode, recorded live at the Web Summit, we welcome Clara Gonçalves, co-founder of Inductiva.AI, to share her journey and insights into the vibrant entrepreneurial scene in Porto.",
    start: "2024-11-12T15:00",
    end: "2024-11-12T16:00",
    legend: "ScaleUp Porto",
    category: "scaleup",
  },
  {
    id: 4,
    title:
      "Toast to Porto |Great Wine Capitals SIM Conference: Startup Portugal",
    details:
      "Fine Wines, long-standing bonds, that’s Porto. Join us for a Toast with Porto Wine at our Stand! <br /><br /> Winemakers gather and cross-reference knowledge. Conductors who compose symphonies based on thousands of possible notes.",
    start: "2024-11-12T16:00",
    end: "2024-11-12T17:00",
    legend: "Porto.",
    category: "porto",
  },
  {
    id: 5,
    title: "Talk : Tech It or Leave It - 42 Porto x BLIP x ISS TECH",
    details:
      "<p>A conversation between Pedro Santa Clara (42 Porto) and Gulherme Braz (BLIP), moderated by Isabel Geriante (ISS TECH) about the intersections of reskilling, upskilling and technological innovation.</p> ",
    start: "2024-11-13T09:30",
    end: "2024-11-13T10:30",
    legend: "Tera",
    category: "tera",
  },
  {
    id: 6,
    title: 'Creating an Economy of Balance - Stage "Corporate Innovation"',
    details:
      "<p>Creating an economy of balance: Ricardo Valente (Town Councillor) and Marko Cadez (President Chamber of Commerce and Industry of Serbia) will have a talk at the Corporate Innovation Stage.</p> ",
    start: "2024-11-13T11:00",
    end: "2024-11-13T11:30",
    legend: "Porto.",
    category: "porto",
  },
  {
    id: 7,
    title:
      "Toast to Porto | Great Wine Capitals + Tera  + Câmara Portuguesa de Comércio e Indústria do Rio de Janeiro",
    details:
      "Fine Wines, long-standing bonds, that’s Porto. Join us for a Toast with Porto Wine at our Stand! <br /><br /> Winemakers gather and cross-reference knowledge. Conductors who compose symphonies based on thousands of possible notes.",
    start: "2024-11-13T12:00",
    end: "2024-11-13T12:30",
    legend: "Porto.",
    category: "porto",
  },
  {
    id: 8,
    title: "Talk: digital nomads Porto - forging a new community",
    details:
      "<p>Official launch & presentation of digital nomads Porto, a city-led initiative to showcase Porto as a hub for digital nomads. <br /><br /> Gonçalo Hall, CEO at NomadX and president of the Digital Nomad Association Portugal, joins the conversation and shares his thoughs on the benefits of location independence, flexibility, and diversity, as well as the contribution of digital nomads to the local economy & society in general.</p>",
    start: "2024-11-13T14:00",
    end: "2024-11-13T14:30",
    legend: "Invest Porto.",
    category: "investPorto",
  },
  {
    id: 9,
    title: "digital nomads stories",
    details:
      "<p>Diaries of a journey through short clips from digital nomads @ Porto<p><br />",
    label: "14:30pm - 15:30pm",
    start: "2024-11-13T15:00",
    end: "2024-11-13T15:30",
    legend: "Invest Porto.",
    category: "investPorto",
  },
  {
    id: 10,
    title:
      'Toast to Porto |  Great Wine Capitals + "Porto Entrepreneurs - Get Together" + Quick Interviews ',
    details:
      "Fine Wines, long-standing bonds, that’s Porto. Join us for a Toast with Porto Wine at our Stand! <br /><br /> Winemakers gather and cross-reference knowledge. Conductors who compose symphonies based on thousands of possible notes.",
    start: "2024-11-13T16:00",
    end: "2024-11-13T17:00",
    legend: "Porto.",
    category: "porto",
  },
  {
    id: 11,
    title: "Talk: How I Met Porto - Talks With The Ecossystem",
    details:
      "<p>Learn about Porto's attractiveness from InvestPorto and gain valuable insights directly from several world-renowned companies in the city: the Porto Leading Investors. </p><br /> ",
    start: "2024-11-14T10:00",
    end: "2024-11-14T11:00",
    legend: "Invest Porto.",
    category: "investPorto",
  },
  {
    id: 12,
    title: "Talk: Organizational Innovation in Tourism: Trends and Transformation",
    details:
      "<p>A conversation between Yotel and Porto Business School, moderated António Marto (Fórum Turismo) about Organizational Innovation in Tourism, its trends and transformation.</p><br /> ",
    label: "11:00am - 12:00pm",
    start: "2024-11-14T11:00",
    end: "2024-11-14T11:30",
    legend: "Visit Porto.",
    category: "visit",
  },
  {
    id: 13,
    title: "Toast to Porto | Great Wine Capitals",
    details:
    "Fine Wines, long-standing bonds, that’s Porto. Join us for a Toast with Porto Wine at our Stand! <br /><br /> Winemakers gather and cross-reference knowledge. Conductors who compose symphonies based on thousands of possible notes.",
    start: "2024-11-14T12:00",
    end: "2024-11-14T12:30",
    legend: "Porto.",
    category: "porto",
  },
  {
    id: 14,
    title: "LEME - Challenge prize announcement",
    details: "Come collect your prize!",
    label: "15:30pm - 16:00pm",
    start: "2024-11-14T15:00",
    end: "2024-11-14T15:30",
    legend: "Leme",
    category: "leme",
  },
  {
    id: 15,
    title: "Toast to Porto| Great Wine Capitals  ",
    details:
      "Fine Wines, long-standing bonds, that’s Porto. Join us for a Toast with Porto Wine at our Stand! <br /><br /> Winemakers gather and cross-reference knowledge. Conductors who compose symphonies based on thousands of possible notes.",
    start: "2024-11-14T16:00",
    end: "2024-11-14T17:00",
    legend: "Porto.",
    category: "porto",
  },
];

const Modal = ({ event, onClose }) => {
  if (!event) return null;

  const hasLabel = event.label !== undefined && event.label !== null; // Verificação do label
  const startTime = dayjs(event.start).format("H:mm a");
  const endTime = dayjs(event.end).format("H:mm a");

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center p-2 z-50">
      <div
        className="relative bg-white p-6 rounded-md shadow-md max-w-2xl w-full min-h-60"
      >
        <h2 className="text-xl font-inter font-bold text-porto-500 mb-2">
          {event.title}
        </h2>
        
        {/* Verifica se existe uma label */}
        {hasLabel ? (
          <p className="text-xs text-left font-inter text-zinc-500 mb-4">
            {event.label}
          </p>
        ) : (
          <p className="text-sm text-blue-700 mb-4">
            {startTime} - {endTime}
          </p>
        )}

        <p
          className="text-sm text-porto-500"
          dangerouslySetInnerHTML={{ __html: event.details }}
        />
        
        <XIcon
          size={20}
          onClick={onClose}
          className="absolute top-2 right-1 cursor-pointer"
        />
      </div>
    </div>
  );
};

// Event component
const Event = ({ event, onClick }) => {
  const hasLabel = event.label !== undefined && event.label !== null;
  const startTime = dayjs(event.start).format("H:mm");
  const endTime = dayjs(event.end).format("H:mm");

  const startHour = dayjs(event.start).hour();
  const endHour = dayjs(event.end).hour();

  const startMinutes =
    dayjs(event.start).hour() * 60 + dayjs(event.start).minute();
  const duration = dayjs(event.end).diff(dayjs(event.start), "minute");

  return (
    <div
      onClick={() => onClick(event)}
      className={`absolute ${
        categoryColors[event.category]
      } p-2 border-t-4 w-full h-fit cursor-pointer flex flex-col justify-around items-start hover:z-20 hover:bg-zinc-100 hover:shadow-lg transition-all duration-300 ease-in-out`}
      style={{
        top: `${(startMinutes - 540) * (112 / 60)}px`,
        minHeight: `${duration * (112 / 60)}px`,
      }}
    >
      {hasLabel ? (
        <p className="text-xs text-left font-inter text-zinc-500">
          {event.label}
        </p>
      ) : (
        <p className="text-xs text-left font-inter text-zinc-500">
          {startTime}
          <span>{`${startHour < 12 ? "am" : "pm"}`}</span> -{endTime}
          <span>{`${endHour < 12 ? "am" : "pm"}`}</span> <br />
        </p>
      )}
      <div className="w-full flex items-center mt-2 mb-2">
        <p className="font-inter font-normal text-black text-left text-sm max-w-full md:max-w-[300px] break-words whitespace-normal">
          {event.title}
        </p>
      </div>
      <div className="flex items-center gap-1 bg-white p-1 w-fit rounded-md">
        <span
          className={`w-2 h-2 rounded-full ${
            categoryDotColors[event.category]
          }`}
        ></span>
        <p className="text-sm text-left font-inter text-black">
          {event.legend}
        </p>
      </div>
    </div>
  );
};

const DayColumn = ({ date, events, onEventClick }) => {
  const hours = Array.from({ length: 13 }, (_, i) => i + 7);
  const day = date.format("D");
  const ordinalSuffix = getOrdinal(day);

  const formattedDate = `${day}<sup>${ordinalSuffix}</sup> ${date.format(
    "MMMM"
  )}`;

  return (
    <div className="relative w-full md:w-1/3 md:border-r border-gray-200">
      <div
        className="text-sm lg:text-lg text-center font-normal text-porto-500 py-2 border-t border-zinc-300"
        dangerouslySetInnerHTML={{
          __html: `${formattedDate} | ${date.format("dddd")}`,
        }}
      />
      <div className="relative h-[600px]">
        {hours.map((hour) => (
          <div
            key={hour}
            className="absolute hidden md:blockleft-0 w-full border-t border-gray-300"
            style={{ top: `${(hour - 7) * 60}px` }}
          />
        ))}
        {events.map((event) => (
          <Event key={event.id} event={event} onClick={onEventClick} />
        ))}
      </div>
    </div>
  );
};

const TimeGrid = () => {
  const hours = Array.from({ length: 10 }, (_, i) => i + 9);

  return (
    <div className="w-16 text-right pr-2 border border-b-white border-gray-200 hidden sm:block">
      {hours.map((hour) => (
        <div
          key={hour}
          className="h-28 flex items-center justify-end text-xs text-gray-500 relative"
        >
          <span>
            {hour <= 12 ? hour : hour}
            {` ${hour < 12 ? "am" : "pm"}`}
          </span>
          <div className="absolute left-0 bottom-0 w-full" />
        </div>
      ))}
    </div>
  );
};

const TabsView = ({ eventsByDay, onEventClick }) => {
  const [selectedDay, setSelectedDay] = useState(0);
  const days = [
    "12<sup>th</sup> November",
    "13<sup>th</sup> November",
    "14<sup>th</sup> November",
  ];

  return (
    <div>
      <div className="flex justify-around border-b">
        {days.map((day, index) => (
          <button
            key={index}
            onClick={() => setSelectedDay(index)}
            className={`py-2 px-4 text-xs ${
              selectedDay === index
                ? "border-b-2 border-porto-500 text-porto-500"
                : "text-gray-500"
            }`}
            dangerouslySetInnerHTML={{ __html: day }}
          />
        ))}
      </div>
      <div className="p-4">
        {eventsByDay[selectedDay].map((event) => (
          <div
            key={event.id}
            onClick={() => onEventClick(event)}
            className={`mb-4 p-2 ${categoryColors[event.category]} border-t-4 `}
          >
            {event.label ? (
              <p className="text-xs text-zinc-500">{event.label}</p>
            ) : (
              <p className="text-xs text-zinc-500">
                {dayjs(event.start).format("H:mm")}
                <span>{`${dayjs(event.start).hour() < 12 ? "am" : "pm"}`}</span>{" "}
                -{dayjs(event.end).format("H:mm")}
                <span>{`${dayjs(event.end).hour() < 12 ? "am" : "pm"}`}</span>
              </p>
            )}
            <p className="text-sm font-normal text-black">{event.title}</p>
            <div className="flex items-center gap-1 bg-white p-1 w-fit rounded-md">
              <span
                className={`w-2 h-2 rounded-full ${
                  categoryDotColors[event.category]
                }`}
              ></span>
              <p className="text-sm text-left font-inter text-black">
                {event.legend}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const Calendar = ({ events }) => {
  const [selectedEvent, setSelectedEvent] = useState(null);
  const startDate = dayjs("2024-11-12");
  const days = [startDate, startDate.add(1, "day"), startDate.add(2, "day")];

  const handleEventClick = (event) => {
    setSelectedEvent(event);
  };

  return (
    <div className="flex flex-col sm:flex-row">
      <TimeGrid />
      {days.map((date, index) => {
        const dayEvents = events.filter((event) =>
          dayjs(event.start).isSame(date, "day")
        );
        return (
          <DayColumn
            key={index}
            date={date}
            events={dayEvents}
            onEventClick={handleEventClick}
          />
        );
      })}
      <Modal event={selectedEvent} onClose={() => setSelectedEvent(null)} />
    </div>
  );
};

const CalendarComponent = () => {
  const [events, setEvents] = useState([]);
  const [isMobileView, setIsMobileView] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState(null);

  useEffect(() => {
    setEvents(eventsData);

    const handleResize = () => {
      setIsMobileView(window.innerWidth < 769);
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const startDate = dayjs("2024-11-12");
  const eventsByDay = [
    events.filter((event) => dayjs(event.start).isSame(startDate, "day")),
    events.filter((event) =>
      dayjs(event.start).isSame(startDate.add(1, "day"), "day")
    ),
    events.filter((event) =>
      dayjs(event.start).isSame(startDate.add(2, "day"), "day")
    ),
  ];

  const handleEventClick = (event) => {
    setSelectedEvent(event);
  };

  return (
    <section
      id="calendar"
      className="w-full min-h-[70vh] flex flex-col justify-start items-center lg:pb-20 p-2"
    >
      <h2 className="font-customBold text-4xl lg:text-5xl font-bold text-porto-500 px-4 sm:px-16 py-4 w-full text-center mb-2 sm:mb-8">
        Check our agenda at Web Summit
      </h2>
      <motion.div
        className="bg-white w-full max-w-6xl mx-auto p-2 sm:p-5 rounded-[50px]"
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <h3 className="font-custom text-center sm:text-left font-lg sm:text-2xl font-normal text-porto-500 px:4 1xl:px-16 py-4 w-full">
          <strong>SCHEDULE |</strong> 12<sup>th</sup> - 14<sup>th</sup> NOV,
          2024
        </h3>
        {isMobileView ? (
          <TabsView eventsByDay={eventsByDay} onEventClick={handleEventClick} />
        ) : (
          <Calendar events={events} />
        )}
        <Modal event={selectedEvent} onClose={() => setSelectedEvent(null)} />
      </motion.div>
    </section>
  );
};

export default CalendarComponent;
