import React from 'react';
import OptimizedImage from '@/components/ui/OptimizedImage';
import Link from 'next/link';
import { GooglePlayBadge, AppStoreBadge } from '@/components/icons';

function DownloadApp() {
  return (
    <>
      <div className="app-area smoke-bg-color">
        <div className="inner">
          <div className="container">
            <div className="row justify-content-center align-items-center g-4">
              <div className="col-lg-7 col-md-12">
                <div className="app-content">
                  <span className="sub">Download Our App</span>
                  <h2>Your Health in Your Pocket—Anywhere, Anytime</h2>
                  <p>
                    Take Doutor with you wherever life takes you. Book appointments, chat with your
                    doctor, access records, and manage prescriptions—all from your mobile device
                    with just a few taps.
                  </p>

                  <ul className="apps-btn">
                    <li>
                      <Link href="https://play.google.com/store/apps" target="_blank">
                        <GooglePlayBadge width={193} height={56} />
                      </Link>
                    </li>
                    <li>
                      <Link href="https://www.apple.com/app-store/" target="_blank">
                        <AppStoreBadge width={193} height={56} />
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="col-lg-5 col-md-12">
                <div className="app-image">
                  <OptimizedImage imageName="app-screenshot" alt="app" />
                </div>
              </div>
            </div>
          </div>

          <div className="app-shape">
            <OptimizedImage imageName="app-shape" alt="shape" />
          </div>
        </div>
      </div>
    </>
  );
}

export default DownloadApp;
