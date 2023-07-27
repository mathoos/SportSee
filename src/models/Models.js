// Classe de modélisation BarChart
export class BarChartModel {
    constructor(barData) {
      this.barData = barData;
    }
  
    formattedData() {
        return this.barData.map((session, index) => ({
            day: index + 1, // Pour afficher le numéro du jour
            // day: session.day, // Pour afficher le jour
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
        const frenchNames = {
            "cardio": "cardio",
            "energy": "énergie",
            "endurance": "endurance",
            "strength": "force",
            "speed": "vitesse",
            "intensity": "intensité",
        };

        return this.performanceSessions.map(data => ({
            kind: frenchNames[this.kind[data.kind]] || this.kind[data.kind], 
            value: data.value,
        }));
    }
}
