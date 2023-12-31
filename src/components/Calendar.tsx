import FullCalendar from "@fullcalendar/react";
import jaLocale from "@fullcalendar/core/locales/ja";
import timeGridPlugin from "@fullcalendar/timegrid";

type ShiftProps = {
  rows: RowType[];
};

type RowType = {
  title: string;
  start: Date;
  end: Date;
  description: string;
  backgroundColor: string;
  borderColor: string;
};

export default function Calendar({ rows }: ShiftProps) {
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
