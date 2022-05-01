type LocalCityType = {
    title: string
    country: string
}
type AdressType = {
    streetTitle: string
    city: LocalCityType
}
type TechType = {
    id: number
    title: string
}

export type StudentType= {
    id: number
    name: string
    age: number
    isActive: boolean
    address: AdressType
    technologies: Array<TechType>
}

export const students: StudentType = {
    id: 1,
    name: 'Dimych',
    age: 32,
    isActive: false,
    address: {
        streetTitle: 'Surganova 2',
        city: {
            title: 'Minsk',
            country: 'Belarus'
        }
    },
    technologies:[
        {
            id: 1,
            title: "HTML"
        },
        {
            id: 2,
            title: "CSS"
        },{
            id: 3,
            title: "REACT"
        },
    ]
}

console.log(students.technologies[2].title)