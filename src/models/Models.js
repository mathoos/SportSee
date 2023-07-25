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


//Classe de modélisation RadarChart
export class RadarChartModel {
    constructor(performanceSessions, kind) {
      this.performanceSessions = performanceSessions;
      this.kind = kind;
    }
  
    formattedData() {
        return this.performanceSessions.map(data => ({
            kind: this.kind[data.kind],
            value: data.value,
        }));
    }
}
