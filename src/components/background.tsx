import React, { useEffect, useRef, useState } from "react";
import useWindowDimensions, {
  WIDTH_PREFIX,
} from "../hooks/get-window-dimensions";

const enum Colors {
  Background = "#1F3473",
  OriginalBall = "#2450A6",
  BallGradient = "#F085F2",
  ClickedBall = "#7937A6",
}

class Circle {
  x: number;
  y: number;
  dx: number;
  dy: number;
  radius: number;
  fillColor: string;

  constructor(
    x: number,
    y: number,
    dx: number,
    dy: number,
    radius: number,
    fillColor: string
  ) {
    this.x = x;
    this.y = y;
    this.dx = dx;
    this.dy = dy;
    this.radius = radius;
    this.fillColor = fillColor;
  }

  draw = (c: CanvasRenderingContext2D) => {
    c.beginPath();
    c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);

    const grd = c.createRadialGradient(
      this.x,
      this.y,
      this.radius,
      this.x + 30,
      this.y + 30,
      0
    );
    grd.addColorStop(0, this.fillColor);
    grd.addColorStop(1, Colors.BallGradient);

    c.fillStyle = grd;
    c.strokeStyle = "transparent";
    c.fill();
    c.stroke();
  };

  update = (c: CanvasRenderingContext2D) => {
    if (this.x + this.radius > innerWidth || this.x - this.radius < 0) {
      this.dx = -this.dx;
    }

    if (this.y + this.radius > innerWidth || this.y - this.radius < 0) {
      this.dy = -this.dy;
    }

    this.x += this.dx;
    this.y += this.dy;

    this.draw(c);
  };

  clickCircle = (xClick: number, yClick: number) => {
    const distance = Math.sqrt(
      (xClick - this.x) * (xClick - this.x) +
        (yClick - this.y) * (yClick - this.y)
    );

    if (distance < this.radius) {
      this.fillColor = Colors.ClickedBall;
    } else {
      this.fillColor = Colors.OriginalBall;
    }
  };
}

export const Background = () => {
  const ref = useRef<HTMLCanvasElement>(null);
  const [circles, setCircles] = useState<Circle[]>([]);
  const [canvas, setCanvas] = useState<HTMLCanvasElement>();

  const { width } = useWindowDimensions();

  useEffect(() => {
    if (ref.current) {
      let ballCount = 1;
      const canvas = ref.current;

      if (width < WIDTH_PREFIX.sm) {
        ballCount = 10;
      } else if (width < WIDTH_PREFIX.md) {
        ballCount = 20;
      } else {
        ballCount = 50;
      }

      if (canvas) {
        initCanvas(canvas, ballCount);
      }
    }
  }, [width]);

  const initCanvas = (canvas: HTMLCanvasElement, ballCount: number) => {
    setCanvas(canvas);
    canvas.width = innerWidth;
    canvas.height = innerHeight;

    const c = canvas.getContext("2d");

    if (c) {
      c.fillStyle = Colors.Background;
      c.fillRect(0, 0, canvas.width, canvas.height);
      const circles: Circle[] = [];

      for (let i = 0; i < ballCount; i++) {
        circles.push(createRandomCircle());
      }

      circles.forEach((circle) => {
        circle.draw(c);
      });
      setCircles(circles);
      animate(c, circles);
    }
  };

  const createRandomCircle = (): Circle => {
    const radius = 80;
    const x = Math.random() * (innerWidth - radius * 2) + radius;
    const y = Math.random() * (innerHeight - radius * 2) + radius;
    const dx = Math.random() - 0.5;
    const dy = Math.random() - 0.5;

    return new Circle(x, y, dx, dy, radius, Colors.OriginalBall);
  };

  const animate = (c: CanvasRenderingContext2D, circles: Circle[]) => {
    requestAnimationFrame(() => animate(c, circles));
    c.clearRect(0, 0, innerWidth, innerHeight);
    c.fillStyle = Colors.Background;
    c.fillRect(0, 0, innerWidth, innerHeight);

    circles.forEach((circle) => {
      circle.update(c);
    });
  };

  const onClick = (e: any) => {
    if (!canvas) {
      return;
    }
    const rect = canvas.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    circles.forEach((circle) => {
      circle.clickCircle(x, y);
    });
  };

  return <canvas ref={ref} onClick={onClick} />;
};
