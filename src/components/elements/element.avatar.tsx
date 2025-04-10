import { MdOutlineLocalFireDepartment } from "react-icons/md";
import styled from "styled-components";

interface AvatarContainerProps {
  size?: string;
  src?: string;
  border?: string;
}
export const AvatarContainer = styled.div<AvatarContainerProps>`
  width: ${(props) => props.size || '72px'};
  min-width: ${(props) => props.size || '72px'};
  height: ${(props) => props.size || '72px'};
  min-height: ${(props) => props.size || '72px'};
  border-radius: 50%;
  background-image: url(${(props) => props.src || ''});
  border:  ${(props) => props.border === "true" ? '1px solid #FFFFFF33' : 'none'};
  background-size: cover;
  background-position: center;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  @media (max-width: 1100px) {
    width: calc(${props => props.size || '72px'} * 0.85);
    min-width: calc(${props => props.size || '72px'} * 0.85);
    height: calc(${props => props.size || '72px'} * 0.85);
    min-height: calc(${props => props.size || '72px'} * 0.85);
  }
`;

interface StatusContainerProps {
  size?: string;
  iconSize?: string;
  position?: string;
}
const StatusDiv = styled.div<StatusContainerProps>`
  width: ${(props) => props.size || '19px'};
  height: ${(props) => props.size || '19px'};
  border-radius: 50%;
  background-color: #FF462E;
  position: ${(props) => props.position || 'absolute'};
  display: flex;
  justify-content: center;
  align-items: center;
  top: 0px;
  right: 0px;
`;

export const StatusContainer: React.FC<StatusContainerProps> = ({
  size,
  iconSize,
  position,
  ...props
}) => {
  return (
    <StatusDiv
      size={size}
      position={position}
      {...props}>
      <MdOutlineLocalFireDepartment size={iconSize || "15px"} />
    </StatusDiv>
  );
};


interface AvatarStatusContainerProps {
  size?: string;
  rank?: string;
  src?: string;
}
export const AvatarStatusContainer: React.FC<AvatarStatusContainerProps> = ({
  size,
  rank,
  src,
  ...props
}) => {
  return (
    <AvatarContainer
      size={size}
      src={src}
      {...props}>
      {rank !== 'none' && <StatusContainer />}
    </AvatarContainer>
  );
};


interface AvatarContainerProps {
  size?: string;
  src?: string;
  border?: string;
}

export const AvatarContainer1 = styled.div<AvatarContainerProps>`
  width: ${(props) => props.size || '92px'};
  min-width: ${(props) => props.size || '92px'};
  height: ${(props) => props.size || '78px'};
  min-height: ${(props) => props.size || '78px'};
  background-image: url(${(props) => props.src || ''});
  border: ${(props) => (props.border === "true" ? '1px solid #FFFFFF33' : 'none')};
  background-size: cover;
  background-position: center;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;

  /* Trapezoid effect */
  clip-path: polygon(0 0, 100% 0, 80% 100%, 0% 100%);
  
  @media (max-width: 1100px) {
    width: calc(${(props) => props.size || '92px'} * 0.85);
    min-width: calc(${(props) => props.size || '92px'} * 0.85);
    height: calc(${(props) => props.size || '78px'} * 0.85);
    min-height: calc(${(props) => props.size || '78px'} * 0.85);
  }
`;

export const AvatarContainer2 = styled.div<AvatarContainerProps>`
  width: ${(props) => props.size || '72px'};
  min-width: ${(props) => props.size || '72px'};
  height: ${(props) => props.size || '72px'};
  min-height: ${(props) => props.size || '72px'};
  border-radius: 2px;
  background-image: url(${(props) => props.src || ''});
  border: ${(props) => props.border === "true" ? '1px solid' : 'none'};
  overflow: hidden;
  border-image-source: ${(props) => props.border === "true" ? 'linear-gradient(180deg, #E0FF2C 0%, #1DF7FF 100%)' : 'none'};
  border-image-slice: 1;
  background-size: cover;
  background-position: center;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  @media (max-width: 1100px) {
    width: calc(${props => props.size || '72px'} * 0.85);
    min-width: calc(${props => props.size || '72px'} * 0.85);
    height: calc(${props => props.size || '72px'} * 0.85);
    min-height: calc(${props => props.size || '72px'} * 0.85);
  }
`;