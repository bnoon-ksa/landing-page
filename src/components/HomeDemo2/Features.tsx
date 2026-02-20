import React from 'react';
import OptimizedImage from '@/components/ui/OptimizedImage';
import { getCdnUrl } from '@/lib/cdn-utils';
import { Help1Icon, Help2Icon, Help3Icon } from '@/components/icons';

// Define types for our feature data
interface FeatureCounter {
  value: string;
  isSub?: boolean;
}

interface FeatureUserImage {
  imageName: string;
  alt: string;
  width: number;
  height: number;
}

interface FeatureCard {
  id: number;
  type: 'patients' | 'doctors' | 'urgent';
  icon?: React.ReactNode;
  counters: FeatureCounter[];
  title: string;
  userImages?: FeatureUserImage[];
  doctorImageName?: string;
  backgroundImageName?: string;
  contactInfo?: {
    icon: React.ReactNode;
    label: string;
    phone: string;
  };
}

// Define our feature data
const featuresData: FeatureCard[] = [
  {
    id: 1,
    type: 'patients',
    icon: <Help1Icon width={35} height={35} />,
    counters: [
      { value: '8' },
      { value: '.', isSub: true },
      { value: '5' },
      { value: 'M+', isSub: true },
    ],
    title: 'Patients Served',
    userImages: [
      {
        imageName: 'user-1',
        alt: 'user1',
        width: 40,
        height: 40,
      },
      {
        imageName: 'user-2',
        alt: 'user2',
        width: 40,
        height: 40,
      },
      {
        imageName: 'user-3',
        alt: 'user3',
        width: 40,
        height: 40,
      },
    ],
  },
  {
    id: 2,
    type: 'doctors',
    icon: <Help2Icon width={35} height={35} />,
    counters: [{ value: '500' }, { value: '+', isSub: true }],
    title: 'Licensed Doctors',
    doctorImageName: 'help-doctors',
  },
  {
    id: 3,
    type: 'urgent',
    counters: [{ value: '24' }, { value: '/', isSub: true }, { value: '7' }],
    title: 'Virtual Access',
    backgroundImageName: 'help-info',
    contactInfo: {
      icon: <Help3Icon width={46} height={46} />,
      label: 'Urgent Help',
      phone: '+1 (800) 456-7890',
    },
  },
];

function Features() {
  return (
    <>
      <div className="container">
        <div className="urgent-help-area">
          <div className="row justify-content-center g-4">
            <div className="col-xl-7 col-md-12">
              <div className="row justify-content-center g-4">
                {featuresData
                  .filter((feature) => feature.type !== 'urgent')
                  .map((feature) => (
                    <div key={feature.id} className="col-lg-6 col-md-6">
                      <div className="urgent-help-card">
                        {feature.type === 'patients' && (
                          <>
                            <div className="icon">{feature.icon}</div>
                            <div className="fun">
                              <div className="content">
                                <div className="d-flex align-items-center">
                                  {feature.counters.map((counter, index) => (
                                    <h3 key={index} className={counter.isSub ? 'sub' : 'counter'}>
                                      {counter.value}
                                    </h3>
                                  ))}
                                </div>
                                <span>{feature.title}</span>
                              </div>
                              <div className="image">
                                <div
                                  className="d-flex align-items-center"
                                  style={{ paddingRight: '10px' }}
                                >
                                  {feature.userImages?.map((user, index) => (
                                    <OptimizedImage
                                      key={index}
                                      imageName={user.imageName}
                                      alt={user.alt}
                                      width={user.width}
                                      height={user.height}
                                      style={{ marginRight: '-10px' }}
                                    />
                                  ))}
                                </div>
                              </div>
                            </div>
                          </>
                        )}

                        {feature.type === 'doctors' && (
                          <div className="inner">
                            <div className="content">
                              <div className="icon">{feature.icon}</div>
                              <div className="title">
                                <div className="d-flex align-items-center">
                                  {feature.counters.map((counter, index) => (
                                    <h3 key={index} className={counter.isSub ? 'sub' : 'counter'}>
                                      {counter.value}
                                    </h3>
                                  ))}
                                </div>
                                <span>{feature.title}</span>
                              </div>
                            </div>
                            <div className="image">
                              <OptimizedImage
                                imageName={feature.doctorImageName!}
                                alt="Licensed doctors"
                                width={270}
                                height={338}
                              />
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  ))}
              </div>
            </div>

            {featuresData
              .filter((feature) => feature.type === 'urgent')
              .map((feature) => (
                <div key={feature.id} className="col-xl-5 col-md-12">
                  <div
                    className="urgent-help-info-card"
                    style={{
                      backgroundImage: `url(${getCdnUrl(feature.backgroundImageName!) || '/images/help/info.jpg'})`,
                    }}
                  >
                    <div className="fun">
                      <div className="d-flex align-items-center">
                        {feature.counters.map((counter, index) => (
                          <h3 key={index} className={counter.isSub ? 'sub' : 'counter'}>
                            {counter.value}
                          </h3>
                        ))}
                      </div>
                      <span>{feature.title}</span>
                    </div>
                    <div className="info">
                      <div className="image">{feature.contactInfo!.icon}</div>
                      <div className="content">
                        <span>{feature.contactInfo!.label}</span>
                        <a href={`tel:${feature.contactInfo!.phone.replace(/\D/g, '')}`}>
                          {feature.contactInfo!.phone}
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Features;
