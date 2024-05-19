'use client';

import Link from 'next/link';
import { type FC, useState } from 'react';
import { FaHome, FaShoppingCart } from 'react-icons/fa';

import styles from '../app/clicker/clicker.module.css';

interface ShopItem {
  internalName: string;
  displayName: string;
  description: string;
  price: number;
  exec: {
    text?: string;
    color?: string;
    image?: string;
    fontSize?: string;
    width?: string;
  };
}

export const ActualClicker: FC<{ dark: boolean }> = ({ dark }) => {
  const hasLocalStorage = typeof localStorage !== 'undefined';
  const previousCount = hasLocalStorage ? localStorage.getItem('count') : null;
  const previousPurchases = hasLocalStorage ? localStorage.getItem('purchased') : null;

  const previousText = hasLocalStorage ? localStorage.getItem('text') : null;
  const previousColor = hasLocalStorage ? localStorage.getItem('color') : null;
  const previousImage = hasLocalStorage ? localStorage.getItem('image') : null;
  const previousSize = hasLocalStorage ? localStorage.getItem('size') : null;
  const previousWidth = hasLocalStorage ? localStorage.getItem('width') : null;

  const [clickedCount, setClicked] = useState<number>(JSON.parse(previousCount ?? '0') as number);
  const [purchasedItems, setPurchased] = useState<string[]>(
    JSON.parse(previousPurchases ?? '["defaultColor", "defaultText"]') as string[]
  );

  const [hText, setHText] = useState(previousText ?? 'h');
  const [hColor, setHColor] = useState(previousColor ?? dark ? '@/ffffff' : '@/000000');
  const [hImage, setHImage] = useState(previousImage ?? 'none');
  const [hSize, setHSize] = useState(previousSize ?? '250px');
  const [hWidth, setHWidth] = useState(previousWidth ?? '250px');

  // this is only used on mobile, but also doesnt matter to save like the other ones.
  const [shouldShowShopLayout, setShopLayoutShown] = useState(false);

  function buttonClick() {
    localStorage.setItem('count', JSON.stringify(clickedCount + 1));
    setClicked(count => count + 1);
  }

  function shopItemBuyInternals(shopItem: ShopItem) {
    if (shopItem.price > clickedCount) {
      return alert('You cannot buy that item.');
    }

    setClicked(count => count - shopItem.price);

    if (shopItem.exec.color) {
      localStorage.setItem('color', shopItem.exec.color);
      setHColor(shopItem.exec.color);
    }

    if (shopItem.exec.text) {
      localStorage.setItem('text', shopItem.exec.text);
      setHText(shopItem.exec.text);

      localStorage.setItem('image', 'none');
      setHImage('none');
    }

    if (shopItem.exec.image && shopItem.exec.width) {
      localStorage.setItem('image', shopItem.exec.image);
      localStorage.setItem('color', 'transparent');
      localStorage.setItem('width', shopItem.exec.width);

      setHColor('transparent');
      setHImage(shopItem.exec.image);
      setHWidth(shopItem.exec.width);
    }

    if (shopItem.exec.fontSize) {
      localStorage.setItem('size', shopItem.exec.fontSize);
      setHSize(shopItem.exec.fontSize);
    }

    localStorage.setItem('count', JSON.stringify(clickedCount));

    if (!purchasedItems.includes(shopItem.internalName)) {
      localStorage.setItem('purchased', JSON.stringify(purchasedItems));
      setPurchased(purchased => [...purchased, shopItem.internalName]);
    }
  }

  const shopItems: ShopItem[] = [
    {
      internalName: 'defaultColor',
      displayName: 'Blank H',
      description: 'Simply just a colorless H.',
      price: 0,
      exec: {
        color: dark ? '@/ffffff' : '@/000000'
      }
    },
    {
      internalName: 'defaultText',
      displayName: 'h',
      description: 'Simply just an h.',
      price: 0,
      exec: {
        text: 'h',
        fontSize: '250px'
      }
    },
    {
      internalName: 'testImage',
      displayName: 'image text',
      description: 'advaith',
      price: 0,
      exec: {
        image:
          'url(https://cdn.discordapp.com/avatars/348591272476540928/4526f46506b05216d07002844e3628b3.png?size=1024)',
        fontSize: '250px',
        width: '600px'
      }
    }
  ];

  return (
    <>
      <div className={styles.desktopGrid}>
        <div className={styles.sidebar}>
          <div className={styles.sidebarTextBox}>
            <small className={styles.small}>H&apos;s clicked</small>
            <h2 className={styles.counterHeader} suppressHydrationWarning>
              {clickedCount}
            </h2>
          </div>
        </div>

        <div className={styles.buttonFlexer}>
          <button
            type="button"
            className={styles.button}
            onClick={buttonClick}
            style={{
              color: hColor,
              backgroundImage: hImage,
              fontSize: hSize,
              width: hWidth,
              height: hWidth
            }}
          >
            {hText}
          </button>
        </div>

        <div className={styles.sidebar}>
          <div className={styles.sidebarTextBox}>
            <h2>Shop</h2>
            <p>Upqrade and improve your h.</p>
          </div>

          {shopItems.map(shopItem => {
            const buyItem = () => {
              shopItemBuyInternals(shopItem);
            };

            return (
              <div onClick={buyItem} onKeyDown={buyItem} key={shopItem.internalName} className={styles.shopItem}>
                <small className={styles.small}>costs {shopItem.price} h</small>
                <h2>{shopItem.displayName}</h2>
                <p>{shopItem.description}</p>
                <p className={purchasedItems.includes(shopItem.internalName) ? styles.purchased : styles.notPurchased}>
                  {purchasedItems.includes(shopItem.internalName) ? 'Purchased' : 'Not purchased'}
                </p>
              </div>
            );
          })}
        </div>
      </div>
      <div className={styles.mobileGrid}>
        {shouldShowShopLayout && (
          <div className={styles.mobileSidebar}>
            <div className={styles.sidebarTextBox}>
              <h2>Shop</h2>
              <p>Upqrade and improve your h.</p>
              <p>
                You currently have <span className={styles.purchased}>{clickedCount}</span> h in your hank.
              </p>
            </div>

            {shopItems.map(shopItem => {
              const buyItem = () => {
                shopItemBuyInternals(shopItem);
              };

              return (
                <div onClick={buyItem} onKeyDown={buyItem} key={shopItem.internalName} className={styles.shopItem}>
                  <small className={styles.small}>costs {shopItem.price} h</small>
                  <h2>{shopItem.displayName}</h2>
                  <p>{shopItem.description}</p>
                  <p
                    className={purchasedItems.includes(shopItem.internalName) ? styles.purchased : styles.notPurchased}
                  >
                    {purchasedItems.includes(shopItem.internalName) ? 'Purchased' : 'Not purchased'}
                  </p>
                </div>
              );
            })}
          </div>
        )}

        {!shouldShowShopLayout && (
          <>
            <div className={styles.sidebar}>
              <div className={styles.sidebarTextBox}>
                <small className={styles.small}>H&apos;s clicked</small>
                <h2>{clickedCount}</h2>
              </div>
            </div>

            <div className={styles.buttonFlexer}>
              <button
                type="button"
                className={styles.button}
                onClick={buttonClick}
                style={{
                  color: hColor,
                  backgroundImage: hImage,
                  fontSize: hSize,
                  width: hWidth
                }}
              >
                {hText}
              </button>
            </div>
          </>
        )}

        <div className={styles.sidebarBaseBox}>
          <Link href="/" className={styles.link}>
            <FaHome size="2em" />
          </Link>
          <button type="button" className={styles.baseButton} onClick={() => setShopLayoutShown(current => !current)}>
            <FaShoppingCart size={'2em'} className={shouldShowShopLayout ? styles.purchased : ''} />
          </button>
        </div>
      </div>
    </>
  );
};
