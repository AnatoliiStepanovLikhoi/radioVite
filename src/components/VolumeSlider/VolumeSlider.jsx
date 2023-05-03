import * as Slider from '@radix-ui/react-slider';
import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';
import './VolumeSlider.css';
import {
  VolumeWrapper,
  VolumeIconUP,
  VolumeIconDown,
} from './VolumeSlider.styled';

export const VolumeSlider = ({ defaultValue, audioRef }) => {
  // const { defaultValue, audioRef } = props;

  // console.log(defaultValue, audioRef);

  const [volume, setVolume] = useState(50);

  // console.log(volume);

  useEffect(() => {
    if (audioRef) {
      audioRef.current.volume = volume / 100;
    }
  }, [volume, audioRef]);

  return (
    <VolumeWrapper>
      <VolumeIconDown />
      <Slider.Root
        className="SliderRoot"
        defaultValue={defaultValue}
        value={[volume]}
        max={100}
        step={1}
        aria-label="Volume"
        onValueChange={setVolume}
      >
        <Slider.Track className="SliderTrack">
          <Slider.Range className="SliderRange" />
        </Slider.Track>
        <Slider.Thumb className="SliderThumb" />
      </Slider.Root>
      <VolumeIconUP />
    </VolumeWrapper>
  );
};

VolumeSlider.propTypes = {
  audioRef: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.shape({ current: PropTypes.any }),
  ]),
  defaultValue: PropTypes.arrayOf(PropTypes.number),
};
