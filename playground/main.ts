import rough from '../src/rough';
import roughjs from 'https://esm.sh/roughjs';
const svg1 = document.getElementById('svg1')!;
const svg2 = document.getElementById('svg2')!;
const rc = rough.svg(svg1 as any as SVGSVGElement);

svg1.appendChild(rc.rectangle(10, 10, 80, 80, {
  fill: 'red',
}));
svg1.appendChild(
  rc.rectangle(110, 10, 80, 80, {
    fill: 'red',
    fillStyle: 'cross-hatch',
    // hachureGap: 50,
  })
);
svg1.appendChild(
  rc.rectangle(210, 10, 80, 80, { fill: 'pink', fillStyle: 'solid' })
);
svg1.appendChild(
  rc.rectangle(310, 10, 80, 80, { fill: 'red', fillStyle: 'cross-hatch' })
);
svg1.appendChild(
  rc.rectangle(410, 10, 80, 80, {
    fill: 'red',
    fillStyle: 'zigzag',
    hachureGap: 8,
  })
);
svg1.appendChild(
  rc.rectangle(510, 10, 80, 80, { fill: 'red', fillStyle: 'dots' })
);

svg1.appendChild(rc.rectangle(10, 110, 80, 80, { roughness: 2 }));
svg1.appendChild(
  rc.rectangle(110, 110, 80, 80, {
    fill: 'red',
    stroke: 'blue',
    hachureAngle: 0,
    strokeWidth: 3,
  })
);
svg1.appendChild(
  rc.rectangle(210, 110, 80, 80, {
    fill: 'pink',
    fillWeight: 5,
    hachureGap: 10,
    hachureAngle: 90,
  })
);

svg1.appendChild(
  rc.rectangle(10, 210, 480, 280, {
    fill: 'red',
    fillStyle: 'dots',
    hachureGap: 20,
    fillWeight: 4,
  })
);

const ro = roughjs.svg(svg2 as any as SVGSVGElement);

svg2.appendChild(rc.rectangle(10, 10, 80, 80, {
  fill: 'red',
}));
svg2.appendChild(
  ro.rectangle(110, 10, 80, 80, {
    fill: 'red',
    fillStyle: 'cross-hatch',
    // hachureGap: 50,
  })
);
svg2.appendChild(
  ro.rectangle(210, 10, 80, 80, { fill: 'pink', fillStyle: 'solid' })
);
svg2.appendChild(
  ro.rectangle(310, 10, 80, 80, { fill: 'red', fillStyle: 'cross-hatch' })
);
svg2.appendChild(
  ro.rectangle(410, 10, 80, 80, {
    fill: 'red',
    fillStyle: 'zigzag',
    hachureGap: 8,
  })
);
svg2.appendChild(
  ro.rectangle(510, 10, 80, 80, { fill: 'red', fillStyle: 'dots' })
);

svg2.appendChild(ro.rectangle(10, 110, 80, 80, { roughness: 2 }));
svg2.appendChild(
  ro.rectangle(110, 110, 80, 80, {
    fill: 'red',
    stroke: 'blue',
    hachureAngle: 0,
    strokeWidth: 3,
  })
);
svg2.appendChild(
  ro.rectangle(210, 110, 80, 80, {
    fill: 'pink',
    fillWeight: 5,
    hachureGap: 10,
    hachureAngle: 90,
  })
);

svg2.appendChild(
  ro.rectangle(10, 210, 480, 280, {
    fill: 'red',
    fillStyle: 'dots',
    hachureGap: 20,
    fillWeight: 2,
  })
);
