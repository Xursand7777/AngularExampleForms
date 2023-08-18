export interface RelativeDTO {
  id: number;
  surname?: string | undefined;
  name?: string | undefined;
  patronymic?: string | undefined;
  fullName?: string | undefined;
  pINFL?: string | undefined;
  birthDate?: string | undefined;
  countryBirthId?: string | undefined;
  regionBirthId?: string | undefined;
  placeBirth?: string | undefined;
  spRelationDegreeId?: string | undefined;
  spRelationDegreeName?: string | undefined;
  spCitizenshipId?: string | undefined;
  spCitizenshipLabel?: string | undefined;
  passportSeria?: string | undefined;
  passportNumber?: string | undefined;
  birthCertificateSeria?: string | undefined;
  birthCertificateNumber?: string | undefined;
  companyName?: string | undefined;
  workAdress?: string | undefined;
  position?: string | undefined;
  regionResidenceId?: string | undefined;
  districtResidenceId?: string | undefined;
  placeOfResidence?: string | undefined;
  file?: number | undefined;
  staffId: number;
  structureName?: string | undefined;
  currentpositionId?: number | undefined;
  profileId?: number | undefined;
  argosId?: number | undefined;
  tin?: string | undefined;
  regionEducationId?: string | undefined;
  districtEducationId?: string | undefined;
  educationalInstitution?: string | undefined;
  address?: string | undefined;
  pensionDateBegin?: string | undefined;
  pensionType?: string | undefined;
  status?: string | undefined;
  dateOfDeath?: string | undefined;
  isChild?: boolean | undefined;
  relativeWorkType?: RelativeWorkType | undefined;
  citizenType?: CitizenType | undefined;
  isSameOrganization?: TypeOfPosition | undefined;
  underAgeType?: UnderAgeType | undefined;
  ordered?: number | undefined;
  relationId: number;
  birthOfDate: Date;
  yearOfDeath: number;
  districtBirthId?: string | undefined;
}


export enum RelativeWorkType {
  No = 0,
  NoWorker = 1,
  Worker = 2,
  Pension = 3,
  WorkerAndPension = 4,
  Student = 5,
  Schoolboy = 6,
}


export enum CitizenType {
  UnderAge = 0,
  Citizen = 1,
  Stateless = 2,
  Foreigner = 3,
  Dead = 4,
}

export enum UnderAgeType {
  Pupil = 0,
  OrphanageChild = 1,
  HomeSchooling = 2,
}

export enum TypeOfPosition {
  All = 0,
  Leader = 1,
  Management = 2,
  Техник = 3,
  Expert = 4,
  ProductionEmployee = 5,
}

export default function ConvertEnumIntoObject(enums : Object): Object[] {
  return Object.keys(enums).filter((v) => isNaN(Number(v)))
    .map((name) => {
      return {
        key: enums[name as keyof typeof enums],
        value: name.toLowerCase(),
      };
    });
}

