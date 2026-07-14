import { Button } from "@/components/ui/button";
import BirthDayFieldWrapper from "@/features/profile/components/BirthDayFieldWrapper";
import EditProfileInput from "@/features/profile/components/EditProfileInput";
import { days, months, years } from "@/features/profile/constants/constants";
import { useEditProfile } from "@/features/profile/hooks/useEditProfile";
import { useGetProfile } from "@/features/profile/hooks/useGetUser";
import {
  editProfileSchema,
  type EditProfileType,
} from "@/features/profile/schemas/profileSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

export default function ProfilePersonalPage() {
  // const {mutate,isError,isSuccess,error}=useEditProfile();
  const { data: user } = useGetProfile();
  console.log(user);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<EditProfileType>({ resolver: zodResolver(editProfileSchema) });

  function onSubmit(data: EditProfileType) {
    console.log(data);
  }
  return (
    <>
      <h1 className="text-lg text-black">Personal information</h1>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
        <div className="md:grid md:grid-cols-2 md:gap-x-25 md:gap-y-5 gap-y-6">
          <EditProfileInput
            {...register("name")}
            title="Full Name"
            errorMSG={errors.name?.message}
          />
          <EditProfileInput
            {...register("phone")}
            title="Phone Number"
            errorMSG={errors.phone?.message}
          />
          <EditProfileInput
            {...register("email")}
            title="Email"
            errorMSG={errors.email?.message}
          />
          <div className="space-y-1">
            <div>
              <label className="text-sm text-black">Your Birthday</label>
            </div>
            {/*birthday */}
            <div className="grid grid-cols-3 gap-4">
              <BirthDayFieldWrapper>
                <select
                  className="w-full outline-none"
                  {...register("birth_Day")}
                >
                  {days.map((day) => (
                    <option key={day} value={day} className="text-sm">
                      {day}
                    </option>
                  ))}
                </select>
              </BirthDayFieldWrapper>
              <BirthDayFieldWrapper>
                <select
                  className="w-full outline-none"
                  {...register("birth_Month")}
                >
                  {months.map((month) => (
                    <option key={month} value={month}>
                      {month}
                    </option>
                  ))}
                </select>
              </BirthDayFieldWrapper>
              <BirthDayFieldWrapper>
                <select
                  className="w-full outline-none"
                  {...register("birth_Year")}
                >
                  {years.map((year) => (
                    <option key={year} value={year}>
                      {year}
                    </option>
                  ))}
                </select>
              </BirthDayFieldWrapper>
            </div>
          </div>
          {/*location */}
          <EditProfileInput
            {...register("location")}
            title="Location"
            className="col-span-2"
            errorMSG={errors.location?.message}
          />
        </div>
        <div className="w-full text-end">
          <Button
            type="submit"
            className="md:w-1/3 w-full py-3 text-center bg-brand text-white hover:bg-blue-700"
          >
            Save Changes
          </Button>
        </div>
      </form>
    </>
  );
}
