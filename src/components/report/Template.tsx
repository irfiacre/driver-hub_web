/* eslint-disable react/display-name */
import React, { useRef, forwardRef } from "react";
import LogoComponent from "../logo/LogoComponent";
import LogoIcon from "../logo/LogoIcon";
import BaseCard from "../cards/BaseCard";
import LineChart from "../charts/LineChart";

interface ReportTemplateProps {
  period: string;
}

const ConstructTable = ({
  header,
  tableData,
}: {
  header: Array<string>;
  tableData: Array<Array<any>>;
}) => (
  <div>
    <div className="py-2.5 text-textLightColor text-base font-medium flex flex-row align-middle items-center px-1.5 gap-3.5 cursor-pointer bg-backgroundColor">
      {header.map((item: any) => (
        <span key={item} className="w-full capitalize">
          {item}
        </span>
      ))}
    </div>
    <hr />
    <div>
      {tableData.map((item: any, index: number) => (
        <div key={index}>
          <div className="flex flex-row align-middle items-center py-2.5 px-1.5 gap-1.5 cursor-pointer hover:bg-backgroundColor">
            {item.map((val: any) => (
              <span key={item} className="w-full capitalize px-2">
                {val}
              </span>
            ))}
          </div>
          <hr />
        </div>
      ))}
    </div>
  </div>
);

const ReportTemplate = React.forwardRef<HTMLDivElement, ReportTemplateProps>(
  (props, ref): any => {
    const { period }: any = props;
    return (
      <div
        ref={ref}
        style={{
          padding: "5px",
          borderRadius: "8px",
        }}
      >
        <div className="p-5 space-y-10">
          <section className="flex flex-row items-end justify-between">
            <div className="flex flex-row items-center gap-2">
              <LogoIcon size={28} color="#858597" />
              <h1 className="text-textLightColor text-2xl font-medium">
                Analytics Report
              </h1>
            </div>
            <p className="text-borderColorLight">
              Period: {period}
              {/* {new Date().toLocaleString()} */}
            </p>
          </section>
          <hr />
          <section>
            <h1 className="text-textDarkColor text-lg capitalize">
              Applications
            </h1>
            <br />
            <ConstructTable
              header={["Total", "Accepted", "Rejected", "Pending"]}
              tableData={[[10, 5, 2, 3]]}
            />
          </section>
          <section>
            <h1 className="text-textDarkColor text-lg capitalize">Courses</h1>
            <br />
            <ConstructTable
              header={["Total Courses", "Lectures"]}
              tableData={[[10, 2]]}
            />
          </section>
          <section>
            <h1 className="text-textDarkColor text-lg capitalize">
              Onboarding Hours
            </h1>
            <br />
            <LineChart />
          </section>
          <br />
          <br />
          <section>
            <p className="text-borderColorLight text-sm font-light">
              Generated on {new Date().toLocaleString()}
            </p>
          </section>
        </div>
      </div>
    );
  }
);

export default ReportTemplate;
