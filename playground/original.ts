import roughjs from 'https://esm.sh/roughjs';

const svg = document.getElementById('svg2')!;
const rc = roughjs.svg(svg as any as SVGSVGElement);

svg.appendChild(rc.rectangle(10, 10, 80, 80, {
  fill: 'red',
  fillStyle: 'dashed',
}));
svg.appendChild(
  rc.rectangle(110, 10, 80, 80, {
    fill: 'red',
    fillStyle: 'cross-hatch',
    // hachureGap: 50,
  })
);
svg.appendChild(
  rc.rectangle(210, 10, 80, 80, { fill: 'pink', fillStyle: 'solid' })
);
svg.appendChild(
  rc.rectangle(310, 10, 80, 80, { fill: 'red', fillStyle: 'cross-hatch' })
);
svg.appendChild(
  rc.rectangle(410, 10, 80, 80, {
    fill: 'red',
    fillStyle: 'zigzag',
    hachureGap: 8,
  })
);
svg.appendChild(
  rc.rectangle(510, 10, 80, 80, { fill: 'red', fillStyle: 'dots' })
);

svg.appendChild(rc.rectangle(10, 110, 80, 80, { roughness: 2 }));
svg.appendChild(
  rc.rectangle(110, 110, 80, 80, {
    fill: 'red',
    stroke: 'blue',
    hachureAngle: 0,
    strokeWidth: 3,
  })
);
svg.appendChild(
  rc.rectangle(210, 110, 80, 80, {
    fill: 'pink',
    fillWeight: 5,
    hachureGap: 10,
    hachureAngle: 90,
  })
);

svg.appendChild(
  rc.rectangle(10, 210, 480, 280, {
    fill: 'red',
    fillStyle: 'dots',
    hachureGap: 20,
    fillWeight: 2,
  })
);
