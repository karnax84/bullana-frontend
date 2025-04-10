import { Div, Image } from "components/base";
import styled from "styled-components";
import { AllProps } from "components/base/interface.base";
import { height } from "styled-system";


const WrapperDiv = styled.div`
 display: flex;
 align-items: center;
 width: 100%;
 margin-left: 0px;
 position: relative;
`;
const TextXpDiv = styled.div<{fSize?: string}>`
 left: 0;
 right: 0;
 text-align: center;
 position: absolute;
 font-size: ${(p) => (p.fSize || "10px")};
`;
interface BarDivProps {
  barColor?: string;
  height?: string;
  radius: boolean;
}
const BarContainerDiv = styled.div<BarDivProps>`
 flex: 1;
  height: ${(p) => (p.height || "14px")};
  background: ${(p) => (p.barColor || "#000E1580")};
  overflow: hidden; 
`;

const FillerDiv = styled.div`
 transition: "width 2s ease-i-out";
  height: inherit;
  border-radius: inherit;
  overflow: hidden;
`;
interface FillerBackgroundProps {
  fillColor?: string;
}
const FillerBackground = styled.div<FillerBackgroundProps>`
  height: inherit;
  transition: "width 2s ease-i-out";
  background:  ${(p) => (p.fillColor || "linear-gradient(90deg, #49FF54 59%, #E0FF2C 100%)")};
`;

interface ProgressBarProps extends AllProps {
  valuePercentage: number;
  barColor?: string;
  radius?: boolean;
  height?: string;
  fillColor?: string;
  xp?: number;
  fSize?: string;
  onClick?: (arg: any) => any;
}

export const ProgressBar: React.FC<ProgressBarProps> = ({
  valuePercentage,
  barColor,
  radius,
  height,
  fillColor,
  xp,
  fSize,
  ...props
}) => {
  const fillerRelativePercentage = (100 / valuePercentage) * 100;
  return (
    <WrapperDiv
      role="progressbar"
      aria-valuemin={0}
      aria-valuemax={100}
      aria-valuenow={valuePercentage}
    >
      {xp !== undefined && <TextXpDiv fSize={fSize}>{xp}Xp</TextXpDiv>}
      <BarContainerDiv barColor={barColor} radius={radius || false} height={height}>
        <FillerDiv style={{ width: `${valuePercentage}%` }}>
          <FillerBackground
            fillColor={fillColor}
            style={{ width: `${fillerRelativePercentage}%` }}
          />
        </FillerDiv>
      </BarContainerDiv>
    </WrapperDiv>
  );
};
