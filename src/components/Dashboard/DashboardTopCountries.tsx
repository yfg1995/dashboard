import { FC } from "react";
import { Title } from "../Title";
import { PlusCircle } from "../../svg/PlusCircle";
import { countries } from "../../dummyData";
import { Arrow } from "../../svg/Arrow";
import { TwoDotsVertical } from "../../svg/TwoDotsVertical";
import { formatNumberWithCommas } from "../../helpers/helpers";
import { ContainerBorderRounded } from "../ContainerBorderRounded";

export interface IDashboardTopCountries {}

export const DashboardTopCountries: FC<IDashboardTopCountries> = () => {
  return (
    <ContainerBorderRounded className="max-w-[550px]">
      <div className="flex-items-center justify-between">
        <Title title="Top Countries" />

        <PlusCircle
          width={20}
          height={20}
          strokeColor="var(--clr-text-grey)"
          fill="#333"
        />
      </div>

      <ul>
        {countries.map((country, index) => (
          <li className="my-4" key={country.country}>
            <div className="flex-items-center justify-between text-brandTextGray">
              <div className="flex-items-center gap-2.5">
                <span>{index + 1}</span>

                <div className="w-8 h-8 rounded-full overflow-hidden">
                  <img
                    src={`countries/${country.imgSrc}`}
                    alt={country.country}
                  />
                </div>

                <span className="text-brandTextGray">{country.country}</span>
              </div>

              <div className="flex-items-center gap-2">
                <span>{formatNumberWithCommas(country.price)}</span>

                <Arrow
                  width={16}
                  height={16}
                  strokeColor={
                    country.price < 15000
                      ? "var(--clr-red)"
                      : "var(--clr-green)"
                  }
                  className={country.price < 15000 ? "rotate-180" : ""}
                />

                <TwoDotsVertical
                  width={12}
                  height={12}
                  strokeColor="var(--clr-text-grey)"
                  className="mt-1.5"
                />
              </div>
            </div>
          </li>
        ))}
      </ul>

      <div className="grid place-content-center text-brandTextGray mt-4 cursor-pointer">
        Check All
      </div>
    </ContainerBorderRounded>
  );
};
