interface IProps {
  str?: string;
}

export const Hero = ({ str }: IProps) => {
  return (
    <div>
      {str}
      Hero
    </div>
  );
};
