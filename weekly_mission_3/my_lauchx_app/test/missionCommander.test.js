const MissionCommander = require('./../app/missionCommander')
describe("Test for missionCommander", () => {
    test('Caso de prueba 1', () => {
        const myMissionCommander = new MissionCommander("Woopa")   
        expect(myMissionCommander.name).toBe("Woopa")
     });
  })