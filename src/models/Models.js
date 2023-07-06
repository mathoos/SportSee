// Classe de modélisation BarChart
export class BarChartModel {
    constructor(barData) {
      this.barData = barData;
    }
  
    formattedData() {
        return this.barData.map(session => ({
            day: session.day,
            kilogram: session.kilogram,
            calories: session.calories
        }));
    }
}


// Classe de modélisation LineChart
export class LineChartModel{
    constructor(lineData){
        this.lineData = lineData;
    }

    formattedData(){
        return this.lineData.map(session => ({
            day: session.day,
            sessionLength: session.sessionLength
        }))
    }
}


// Classe de modélisation RadarChart
export class RadarChartModel {
    constructor(performanceSessions) {
      this.performanceSessions = performanceSessions;
    }
  
    formattedData() {
        return this.performanceSessions.map(data => ({
            kind: data.kind,
            value: data.value,
        }));
    }
}

// export class RadarChartModel{
//     constructor(radarData){
//         this.performanceSessions = radarData.performanceSessions;
//         this.kind = radarData.kind;
//     }

//     formattedData() {
//         return this.performanceSessions.map(data => ({
//             kind: this.kind[data.kind],
//             value: data.value,
//         }));
//     }
// }
