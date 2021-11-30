import React from 'react';
import L, { IconOptions, PointExpression } from 'leaflet';
import { Marker, Popup } from 'react-leaflet';

import { ReactComponent as MapBackgroundIcon } from 'assets/icons/map-background.svg';

import * as S from './DoctorsMap.styles';
import { useResponsive } from 'hooks/useResponsive';

import { Doctor } from 'api/doctors.api';
import { DoctorProfile } from 'components/common/DoctorProfile/DoctorProfile';

const LARGE_MARKER_SIZE: PointExpression = [50, 50];
const MARKER_SIZE: PointExpression = [30, 30];

const defineIconSize = (isDesktop: boolean): PointExpression => {
  return (isDesktop && LARGE_MARKER_SIZE) || MARKER_SIZE;
};

class MarkerDoctor extends L.Icon {
  constructor(props: IconOptions, isDesktop: boolean) {
    const iconSIze = defineIconSize(isDesktop);
    super({
      popupAnchor: iconSIze,
      iconSize: iconSIze,
      ...props,
    });
  }
}

interface DoctorsMapProps {
  doctors: Doctor[];
}

export const DoctorsMap: React.FC<DoctorsMapProps> = ({ doctors }) => {
  const { isDesktop } = useResponsive();

  return (
    <S.DoctorsMap>
      <MapBackgroundIcon />
      {doctors.map((marker) => (
        <Marker
          key={marker.id}
          icon={
            new MarkerDoctor(
              {
                iconUrl: marker.imgUrl,
                iconRetinaUrl: marker.imgUrl,
              },
              isDesktop,
            )
          }
          position={[marker.gps.latitude, marker.gps.longitude]}
        >
          <Popup>
            <DoctorProfile
              src={marker.imgUrl}
              name={marker.name}
              speciality={marker.specifity}
              rating={marker.rating}
            />
          </Popup>
        </Marker>
      ))}
    </S.DoctorsMap>
  );
};
