import FullCalendar from "@fullcalendar/react";
import jaLocale from "@fullcalendar/core/locales/ja";
import timeGridPlugin from "@fullcalendar/timegrid";

type shiftArray = {
  rows: rows[];
};

type rows = {
  key: number;
  title: string;
  start: Date;
  end: Date;
  description: string;
  backgroundColor: string;
  borderColor: string;
};

export default function Calendar({ rows }: shiftArray) {
  return (
    <div>
      {/* TODO : デザイン等調整 */}
      <FullCalendar
        plugins={[timeGridPlugin]}
        initialView="timeGridWeek"
        initialEvents={rows}
        locale={jaLocale}
        allDaySlot={false}
        headerToolbar={{
          left: "timeGridDay timeGridWeek",
          center: "title",
          right: "prev today next",
        }}
      />
    </div>
  );
}
