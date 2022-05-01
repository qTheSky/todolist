import {StudentType} from '../02-objects/02';
import {CityType, GovernmentBuildingType, HouseType} from '../02-objects/02_02';

export const addSkill = (student: StudentType, skill: string) => {
    student.technologies.push({
        id: new Date().getTime(),
        title: skill
    })

}


export function makeStudentActive(s: StudentType) {
    s.isActive = true;
}


export const doesStudenLiveIn = (s: StudentType, cityName: string) => {
    return s.address.city.title === cityName;
}

export const addMoneyToBudget = (building: GovernmentBuildingType, budget: number) => {
  building.budget += budget;
}

export const repairHouse = (houseType: HouseType) => {
    houseType.repaired = true;
}

export const toFireStaff = (building: GovernmentBuildingType, staffCountToFire: number) => {
    building.staffCount -= staffCountToFire;
}
export const toHireStaff = (building: GovernmentBuildingType, staffCountToHire: number) => {
    building.staffCount += staffCountToHire;
}

export function createMessage(props: CityType){
    // return "Hello " + props.title + " citizens. i want you be happy. All " + props.citizensNumber + " men"
    return `Hello ${props.title} citizens. i want you be happy. All ${props.citizensNumber} men`
}