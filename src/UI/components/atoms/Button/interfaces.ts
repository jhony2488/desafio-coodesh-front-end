export interface ButtonProps {
  loading?: boolean;

  variant: 'primary' | 'secondary';

  disabled?: boolean;

  mini?: boolean;

  max?: boolean;

  height?: string;

  fontSize?: string;

  children: string | any;

  onClick?: () => void;
}

export interface ButtonPropsComponent {
  loading?: boolean;
  children: string | any;
  variant: 'primary' | 'secondary';
  mini?: boolean;
  max?: boolean;
  height?: string;
  fontSize?: string;
  widthCircle: string;
  heightCircle: string;
  onClick?: () => void;
}

export interface CircleProps {
  width?: string;
  height?: string;
  variant: 'primary' | 'secondary';
}
