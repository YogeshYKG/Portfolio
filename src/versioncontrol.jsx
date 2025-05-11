import Version1 from './App.jsx';
import Version2 from './version2.0/App.jsx';

const VersionControl = () => {
  const LoadVersion = Version1; // or Version2

  return (
    <>
      <LoadVersion />
    </>
  );
};

export default VersionControl;
