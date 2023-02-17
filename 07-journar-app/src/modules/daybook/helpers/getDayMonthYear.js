const months = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio','Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre']
const days   = ['Domingo','Lunes','Martes','Miércoles','Jueves','Viernes','Sábado']

const getDayMonthYear = (dateString) =>{
    const date = new Date(dateString)
    return{
        day:date.getDate(),
        month:months[ date.getMonth() ],
        yearDay:`${ date.getFullYear() }, ${ days[ date.getDay() ] }`
    }
}
/* day() {
    const date = new Date( this.entry.date )
    return date.getDate()
},
month() {
    const date = new Date( this.entry.date )
    return months[ date.getMonth() ]
},
yearDay() {
    const date = new Date( this.entry.date )
    return `${ date.getFullYear() }, ${ days[ date.getDay() ] }`
} */

export default getDayMonthYear