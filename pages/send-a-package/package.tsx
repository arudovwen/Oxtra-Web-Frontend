import SendPackageLayout from '@/components/Layouts/SendPackageLayout';
import PackageDetailsForm from '@/components/Forms/PackageDetailsForm';

const Package = () => {
  const sendPackageLayoutActivePage = 'Package';
  return (
    <SendPackageLayout
      sendPackageLayoutActivePage={sendPackageLayoutActivePage}
    >
      <PackageDetailsForm />
    </SendPackageLayout>
  );
};

export default Package;
