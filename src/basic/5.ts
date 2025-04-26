enum DayenumOfWeek {
 Monday,
 Tuesday,
 Wednesday,
 Thursday,
 Friday,
 Saturday,
 Sunday
}


const isWeekend = (day: DayenumOfWeek): boolean => {
    if (day === DayenumOfWeek.Saturday || day === DayenumOfWeek.Sunday) {
        return true
    }
    else {
        return false
    }
}
