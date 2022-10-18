import { Feather } from "@expo/vector-icons";
import {
  Calendar as CustomCalendar,
  LocaleConfig,
} from "react-native-calendars";
import { useTheme } from "styled-components";
interface CalendarProps {}

LocaleConfig.locales["pt-br"] = {
  monthNames: [
    "Janeiro",
    "Fevereiro",
    "Março",
    "Abril",
    "Maio",
    "Junho",
    "Julho",
    "Agosto",
    "Setembro",
    "Outubro",
    "Novembro",
    "Dezembro",
  ],
  monthNamesShort: [
    "Jan",
    "Fev",
    "Mar",
    "Abr",
    "Mai",
    "Jun",
    "Jul",
    "Ago",
    "Set",
    "Out",
    "Nov",
    "Dez",
  ],
  dayNames: [
    "Domingo",
    "Segunda-Feira",
    "Terça-Feira",
    "Quarta-Feira",
    "Quinta-Feira",
    "Sexta-Feira",
    "Sábado",
  ],
  dayNamesShort: ["DOM", "SEG", "TER", "QUA", "QUI", "SEX", "SAB"],
  today: "Hoje",
};
LocaleConfig.defaultLocale = "pt-br";
export function Calendar({}: CalendarProps) {
  const theme = useTheme();
  return (
    <CustomCalendar
      renderArrow={(direction) => (
        <Feather
          size={24}
          color={theme.colors.text}
          name={direction == "left" ? "chevron-left" : "chevron-right"}
        />
      )}
      headerStyle={{
        backgroundColor: theme.colors.background_secondary,
        borderBottomColor: theme.colors.text_detail,
        borderBottomWidth: 0.5,
        paddingBottom: 10,
        marginBottom: 10,
      }}
      theme={{
        textDayFontFamily: theme.fonts.primary_400,
        textDayHeaderFontFamily: theme.fonts.primary_400,
        textDayHeaderFontSize: 10,
        textMonthFontSize: 20,
        textMonthFontFamily:theme.fonts.secondary_600,
        monthTextColor: theme.colors.title,
        arrowStyle: {
          marginHorizontal: -15,
        },
      }}
      firstDay={1}
      minDate={new Date()}
    />
  );
}
