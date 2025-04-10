import { ContainerFluid, Div, LinkBase } from "components/base";
import { AllProps } from "components/base/interface.base";
import { IoMdArrowBack } from "react-icons/io";
import ReactLoading from "react-loading";
import styled from "styled-components";


interface BackgroundImageDivProps {
    imageUrl: string;
}

export const BackgroundImageDiv = styled(Div) <BackgroundImageDivProps>`
  width: 100%;
  height: 100vh;
  background-image: url(${props => props.imageUrl});
    background-size: contain;
    background-position: center;
    background-repeat: no-repeat;
`;

export const BrandTitle = styled(Div)``;
BrandTitle.defaultProps = {
    fontSize: "12px",
    textAlign: "center",
    fontWeight: "600",
    color: "white",
    lineHeight: "14.95px",
    letterSpacing: "1.95px"
};

export const BrandLink = styled(LinkBase)``;
BrandLink.defaultProps = {
    px: "1em",
    fontWeight: "500",
    fontSize: "12px",
    fontStyle: "italic",
    lineHeight: "16px",
    letterSpacing: "0.02em",
    textAlign: "center"
};

export const BottomLink = styled(LinkBase)``;
BottomLink.defaultProps = {
    fontWeight: "500",
    fontSize: "16px",
    lineHeight: "20px",
    color: "color_2"
};

export const BottomTag = styled(Div)``;
BottomTag.defaultProps = {
    fontWeight: "400",
    fontSize: "16px",
    lineHeight: "20px",
};

export const LeftBorderDiv = styled(ContainerFluid)`
    border-left: 1px solid;
    border-image-source: linear-gradient(180deg, rgba(121, 92, 40, 0.03) 0%, #DFAA4A 47.5%, rgba(121, 92, 40, 0.03) 100%);
    border-image-slice: 1;
    border-image-width: 1;
    border-image-repeat: stretch;
}
`;

export const FilterDiv = styled(ContainerFluid)`
    position: fixed;
    bottom: 0;
    height: 50vh;
    width: -webkit-fill-available;
    background: linear-gradient(180deg, rgba(0, 0, 0, 0) -3.34%, #000000 100%);
    z-index: 0;
}
`;

export const BullanaTitle = styled(Div)``;
BullanaTitle.defaultProps = {
    fontFamily: "Gibson",
    fontWeight: "600",
    fontSize: "23px",
    lineHeight: "28.8px",
    letterSpacing: "0.07em",
    textAlign: "left"
};

export const WelcomeTitle = styled(Div)``;
WelcomeTitle.defaultProps = {
    fontFamily: "Arial",
    fontWeight: "700",
    fontSize: "40px",
    lineHeight: "46px",
    letterSpacing: "2px",
    textAlign: "left"
};

export const HeaderTitle = styled(Div)`
text-align: left;
font-family: 'Anybody ExtraCondensed', sans-serif;
text-transform: uppercase;
`;
HeaderTitle.defaultProps = {
    fontWeight: "700",
    fontSize: ["36px", "36px", "40px", "40px"],
};



const ParallelDiv = styled.div <NavLinkProps>`
 position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: ${({ active }) => (active ? '#DFFF2C' : 'none')};  
  transform: skew(-15deg);     /* Skew the background */
  z-index: 1;  
`;
interface NavLinkProps {
    active: boolean;
}

const NavLinkBase = styled(LinkBase) <NavLinkProps>`
    text-transform: uppercase;
    font-family: 'Anybody ExtraCondensed', sans-serif;
    color: ${({ active }) => (active ? '#000E15' : '#7F818B')};
    &:hover {
    color: #000E15;
  }
    &:hover ${ParallelDiv} {
    background-color: #DFFF2C;
  }
`;
NavLinkBase.defaultProps = {
    fontWeight: "500",
    fontSize: "24px",
    textAlign: "center",
    position: "relative",
    display: "inline-flex",
    px: "20px",
    py: "0px",
};

interface LoginXBtnProps extends NavLinkProps {
    onClick?: React.MouseEventHandler<HTMLAnchorElement>;
    children?: React.ReactNode;
}

export const NavLink: React.FC<LoginXBtnProps> = ({
    active,
    onClick,
    children,
    ...props
}) => {
    return (
        <NavLinkBase
            mx={"10px"}
            onClick={onClick}
            active={active}
            {...props}>
            <ParallelDiv active={active} />
            <Div position={'relative'} zIndex={2}>
                {children}
            </Div>

        </NavLinkBase>
    );
};

export const DrawerLink = styled(LinkBase) <NavLinkProps>`
font-family: 'Anybody ExtraCondensed', sans-serif;
font-size: 32px;
line-height: 33.12px;
letter-spacing: 0.02em;
text-align: left;
text-transform: uppercase;
color: ${({ active }) => (active ? '#DFFF2C' : '#7F818B')};
font-weight: ${({ active }) => (active ? '500' : '400')};
    &:hover {
    color: #DFFF2C;
  }
`;
DrawerLink.defaultProps = {
    fontSize: "24px",
    textAlign: "left",
    my: "10px"
};


export const Title700 = styled(Div)``;
Title700.defaultProps = {
    fontWeight: "700",
    fontSize: "20px",
};


export const GradientDiv = styled(ContainerFluid)`
    position: relative;
    padding: 1em;
    background-clip: padding-box; /* Ensures the background doesn't overlap the border */
    &::before {
        content: '';
        position: absolute;
        top: -2px; /* Border thickness */
        left: -2px;
        right: -2px;
        bottom: -2px;
        z-index: -1;
        border-radius: inherit; /* Matches the border-radius of the main element */
        background: linear-gradient(180deg, #E0FF2C 0%, #1DF7FF 100%);
    }
}
`;
GradientDiv.defaultProps = {
    bg: "bg_1"
}

export const TxT1 = styled(Div)`
text-transform: uppercase;
    font-family: 'Anybody ExtraCondensed', sans-serif;
`;
TxT1.defaultProps = {
    fontSize: "28px",
    fontWeight: "400",
    textAlign: "left"
};

export const TxT2 = styled(Div)`
font-family: 'Anybody', sans-serif;
`;
TxT2.defaultProps = {
    fontSize: "14px",
    fontWeight: "400",
    textAlign: "left",
    color: "color_3"
};

export const TxT3 = styled(Div)``;
TxT3.defaultProps = {
    fontSize: "16px",
    fontWeight: "400",
    textAlign: "left",
    color: "bg_6"
};

export const NormalDiv = styled(ContainerFluid)`
    flex-direction: column;
    border: 1px solid #191C2E
`;
NormalDiv.defaultProps = {
    bg: "bg_1",
    px: '1.5em',
    py: '1em'
}

interface HeaderLinkProps extends AllProps {
    title: string;
    onClick?: React.MouseEventHandler<HTMLAnchorElement>;
}

export const HeaderLink: React.FC<HeaderLinkProps> = ({
    title,
    onClick,
    ...props
}) => {
    return (
        <LinkBase alignItems={"center"} {...props} onClick={onClick}>
            <IoMdArrowBack size={"25px"} />
            <HeaderTitle ml={"10px"}>{title}</HeaderTitle>
        </LinkBase>
    );
};


export const Title1 = styled(Div)`
font-family: 'Anybody ExtraCondensed', sans-serif;
text-transform: uppercase;
`;
Title1.defaultProps = {
    fontSize: ["22px", "22px", "24px", "24px"],
    fontWeight: "500",
};


export const MobileDiv = styled(Div)`
 `;
MobileDiv.defaultProps = {
    px: ["1.5em", "2.5em", "3.5em", "1em"],
    py: "1em"
}

export const Loading: React.FC = ({
}) => {
    return (
        <Div width={'100%'} justifyContent={'center'} pt={"2em"}>
            <ReactLoading type={'spinningBubbles'} color={'#DFFF2C'} height={30} width={30} />
        </Div>
    );
};