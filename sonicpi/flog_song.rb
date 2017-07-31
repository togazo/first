# カエルの歌を演奏する
define :flog_song do |bpm|
  bt = 60.0/bpm
  #メロディーを2次元配列で与える[音（数字でもコードでも。休符は0）,長さ(1拍=四分音符を1)]
  arr_note = [[:C,1],[:D,1],[:E,1],[:F,1],[:E,1],[:D,1],[:C,1],[0,1],[:E,1],[:F,1],[:G,1],[:A,1],[:G,1],[:F,1],[:E,1],[0,1],[:C,1],[0,1],[:C,1],[0,1],[:C,1],[0,1],[:C,1],[0,1],[:C,0.5],[:C,0.5],[:D,0.5],[:D,0.5],[:E,0.5],[:E,0.5],[:F,0.5],[:F,0.5],[:E,1],[:D,1],[:C,1],[0,1]]
  
  use_synth :piano
  for one_note in arr_note do
      if one_note[0] != 0
        if one_note[1] != 1
          play one_note[0], release: bt*one_note[1]
        else
          play one_note[0]
        end
      end
      sleep bt*one_note[1]
    end
  end
  
  # カエルの歌を輪唱する
  define :loop_flog_song do |time,bpm|
    bt = 60.0/bpm
    msr = 240.0/bpm
    
    time.times do
      in_thread do
        flog_song bpm
      end
      #再生のタイミングを2小節分ずらす
      sleep msr*2
    end
  end
  
  # MAIN
  loop_flog_song 3, 120